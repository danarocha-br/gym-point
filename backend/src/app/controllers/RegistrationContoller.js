import * as Yup from 'yup';
import { parseISO, isBefore, addMonths, isAfter } from 'date-fns';

import Registration from '../models/Registration';
import Plan from '../models/Plan';
import Student from '../models/Student';

class RegistrationContoller {
  async index(req, res) {
    const { page = 1 } = req.query;

    // check if plan is still valid.

    const enrollments = await Registration.findAll({
      order: [['createdAt', 'DESC']],
      limit: 20,
      offset: (page - 1) * 20,
      attributes: ['id', 'start_date', 'end_date', 'price'],
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'name', 'email'],
        },
        {
          model: Plan,
          as: 'plan',
          attributes: ['id', 'title', 'price', 'duration'],
        },
      ],
    });

    enrollments.map(enrollment => {
      enrollment.active = !isBefore(enrollment.end_date, new Date());

      return enrollment;
    });

    return res.json(enrollments);
  }

  async show(req, res) {
    const enrollment = await Registration.findOne({
      where: { id: req.params.enrollmentId },
      attributes: ['id', 'start_date', 'end_date', 'price'],
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'name', 'email', 'birthday', 'height', 'weight'],
        },
        {
          model: Plan,
          as: 'plan',
          attributes: ['title'],
        },
      ],
    });

    if (!enrollment) {
      return res.status(404).json({
        error: 'Enrollment with this given ID was not found.',
      });
    }

    return res.json(enrollment);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      student_id: Yup.number()
        .positive()
        .required(),
      plan_id: Yup.number()
        .positive()
        .required(),
      start_date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const { start_date } = req.body;
    const parsedDate = parseISO(start_date);

    // check for past dates

    if (isBefore(parsedDate, new Date())) {
      return res
        .status(400)
        .json({ error: 'You cannot enroll in past dates.' });
    }

    // check if plan is available

    const plan = await Plan.findByPk(req.body.plan_id);

    if (!plan) {
      return res.status(400).json({ error: 'This plan is not available.' });
    }

    const student = await Student.findOne({
      where: { id: req.body.student_id },
      attributes: ['id', 'name', 'email'],
    });

    if (!student) {
      return res
        .status(400)
        .json({ error: 'This student is not in database.' });
    }

    // check if student is already registered in a plan

    const isStudentEnrolled = await Registration.findOne({
      where: {
        student_id: req.body.student_id,
      },
    });

    if (isStudentEnrolled) {
      return res
        .status(400)
        .json({ error: 'This student is already enrolled to a plan.' });
    }

    // calculations

    const { duration } = plan;
    const price = plan.price * duration;

    const end_date = addMonths(new Date(parsedDate), duration);

    await Registration.create({
      student_id: req.body.student_id,
      plan_id: req.body.plan_id,
      start_date: parsedDate,
      end_date,
      price,
      active: true,
    });

    return res.json({
      student_id: req.body.student_id,
      plan_id: req.body.plan_id,
      started_date: parsedDate,
      end_date,
      active: true,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      plan_id: Yup.number(),
      start_date: Yup.date(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const enrollment = await Registration.findByPk(req.params.enrollmentId);

    if (!enrollment) {
      return res.status(404).json({
        error: 'Enrollment with this given ID was not found.',
      });
    }

    // check for past dates

    const { start_date } = req.body;
    const parsedDate = parseISO(start_date);

    if (isBefore(parsedDate, new Date())) {
      return res
        .status(400)
        .json({ error: 'You cannot enroll in past dates.' });
    }

    // check if plan is available

    const plan = await Plan.findOne({
      where: { id: req.body.plan_id },
      attributes: ['title', 'duration', 'price'],
    });

    if (!plan) {
      return res.status(400).json({ error: 'This plan is not available.' });
    }

    const student = await Student.findOne({
      where: { id: enrollment.student_id },
      attributes: ['id', 'name', 'email'],
    });

    // calculations

    const { duration, price } = plan;
    const totalPrice = price * duration;
    const end_date = addMonths(parseISO(start_date), duration);

    // update

    const { id, plan_id } = req.body;

    await enrollment.update({
      plan_id,
      start_date: parsedDate,
      price: totalPrice,
      end_date,
      enrolled: true,
    });

    return res.json({
      id,
      student,
      plan,
      start_date: parsedDate,
      price: totalPrice,
      end_date,
      enrolled: true,
    });
  }

  async delete(req, res) {
    const { enrollmentId } = req.params;
    const enrollment = await Registration.findByPk(enrollmentId);

    if (!enrollment) {
      return res.status(404).json({
        error: 'Enrollment with this given ID was not found.',
      });
    }

    await enrollment.destroy();

    return res.json();
  }
}

export default new RegistrationContoller();

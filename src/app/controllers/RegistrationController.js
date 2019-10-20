import * as Yup from 'yup';
import { parseISO, isBefore, addMonths } from 'date-fns';

import Registration from '../models/Registration';
import Plan from '../models/Plan';
import Student from '../models/Student';

class RegistrationController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const registrations = await Registration.findAll({
      attributes: [
        'id',
        'student_id',
        'plan_id',
        'start_date',
        'end_date',
        'price',
      ],
      // include: [
      //   {
      //     model: Student,
      //     as: 'student',
      //     attributes: ['id', 'name', 'email'],
      //   },
      //   {
      //     model: Plan,
      //     as: 'plan',
      //     attributes: ['id', 'title'],
      //   },
      // ],
      limit: 20,
      offset: (page - 1) * 20,
    });

    return res.json(registrations);
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

    const studentRegistered = await Registration.findOne({
      where: { student_id: req.body.student_id },
    });

    if (studentRegistered) {
      return res
        .status(400)
        .json({ error: 'This student is already enrolled to a plan.' });
    }

    // calculations

    const { duration } = plan;
    const price = plan.price * duration;
    // const [year, month, day] = req.body.start_date.split('-');
    const end_date = addMonths(new Date(parsedDate), duration);

    await Registration.create({
      student_id: req.body.student_id,
      plan_id: req.body.plan_id,
      start_date,
      end_date,
      price,
    });

    return res.json({
      student_id: req.body.student_id,
      plan_id: req.body.plan_id,
      start_date,
      end_date,
      price,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      student_id: Yup.number(),
      plan_id: Yup.number(),
      start_date: Yup.date(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const registration = await Registration.findByPk(req.params.registrationId);

    if (!registration) {
      return res.status(404).json({
        error: 'Registration with this given ID was not found.',
      });
    }

    const { start_date } = req.body;

    // check for past dates

    if (isBefore(parseISO(start_date), new Date())) {
      return res.status(400).json({ error: 'Past dates are not allowed.' });
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
      where: { id: req.body.student_id },
      attributes: ['id', 'name', 'email'],
    });

    if (!student) {
      return res
        .status(400)
        .json({ error: 'This student is not in database.' });
    }

    // calculations

    const { duration, price } = plan;
    const totalPrice = price * duration;
    const end_date = addMonths(parseISO(start_date), duration);

    const { id, student_id, plan_id } = await registration.update({
      ...req.body,
      price: totalPrice,
      end_date,
    });

    return res.json({
      id,
      student_id,
      plan_id,
      start_date,
      price,
      end_date,
    });
  }

  async delete(req, res) {
    const { registrationId } = req.params;
    const registration = await Registration.findByPk(registrationId);

    if (!registration) {
      return res.status(404).json({
        error: 'Registration with this given ID was not found.',
      });
    }

    await registration.destroy();

    return res.json();
  }
}

export default new RegistrationController();

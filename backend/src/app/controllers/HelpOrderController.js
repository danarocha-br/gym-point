import * as Yup from 'yup';
import { isAfter } from 'date-fns';

import Registration from '../models/Registration';
import Student from '../models/Student';
import HelpOrder from '../models/HelpOrder';

class HelpOrderController {
  async index(req, res) {
    const helpOrders = await HelpOrder.findAll({
      where: {
        student_id: req.params.studentId,
      },
      attributes: ['id', 'question', 'answer', 'answer_at', 'createdAt'],
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'name', 'email'],
        },
      ],
    });

    return res.json(helpOrders);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      question: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    // find the student

    const student = await Student.findOne({
      where: { id: req.params.studentId },
    });

    if (!student) {
      return res.status(400).json({ error: 'This id was not found.' });
    }

    // check if student is already registered in a plan and is plan is still valid.

    const isStudentEnrolled = await Registration.findOne({
      where: { student_id: req.params.studentId },
    });

    if (!isStudentEnrolled) {
      return res
        .status(400)
        .json({ error: 'You are not enrolled to any of our plans.' });
    }

    if (!isAfter(isStudentEnrolled.end_date, new Date())) {
      return res
        .status(401)
        .json({ error: 'Your enrollment is no longer valid.' });
    }

    const { question } = req.body;

    await HelpOrder.create({ student_id: student.id, question });

    return res.json({ student_id: student.id, question });
  }

  async delete(req, res) {
    const helpOrder = req.params.orderId;

    if (!helpOrder) {
      return res.status(404).json({
        error: 'Order with this given ID was not found.',
      });
    }

    await HelpOrder.destroy({
      where: { id: helpOrder },
    });

    return res.json();
  }
}

export default new HelpOrderController();

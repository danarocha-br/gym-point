import * as Yup from 'yup';
import { format } from 'date-fns';

import Student from '../models/Student';
import HelpOrder from '../models/HelpOrder';
import Mail from '../../lib/Mail';

class AdminHelpOrderController {
  async index(req, res) {
    const helpOrders = await HelpOrder.findAll({
      where: {
        answer: null,
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
      answer: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }
    // find the order

    const order = req.params.orderId;

    if (!order) {
      return res.status(400).json({ error: 'This order id was not found.' });
    }

    const helpOrder = await HelpOrder.findByPk(order, {
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['name', 'email'],
        },
      ],
    });

    // if (helpOrder.answer_at) {
    //   return res
    //     .status(401)
    //     .json({ error: 'You can only answer a help order once' });
    // }

    // update the order

    const { answer } = req.body;

    await helpOrder.update({ answer, answer_at: new Date() });

    await helpOrder.save();

    await Mail.sendMail({
      to: `${helpOrder.student.name} <${helpOrder.student.email}>`,
      subject: 'You have a new answer to your order. Check it out!',
      template: 'answer',
      context: {
        student: helpOrder.student.name,
        order: helpOrder.id,
        question: helpOrder.question,
        answer: helpOrder.answer,
        answerDate: format(helpOrder.answer_at, "'on' dd MMMM, 'at' H:mm'h'"),
      },
    });

    return res.json({ helpOrder });
  }
}

export default new AdminHelpOrderController();

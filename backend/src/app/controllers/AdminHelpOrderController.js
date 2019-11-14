import * as Yup from 'yup';

import Student from '../models/Student';
import HelpOrder from '../models/HelpOrder';
import Queue from '../../lib/Queue';
import AnswerMail from '../jobs/AnswerMail';

class AdminHelpOrderController {
  async index(req, res) {
    const helpOrders = await HelpOrder.findAll({
      where: {
        answer: null,
      },
      order: [['createdAt']],
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

    // update the order

    const { answer } = req.body;

    await helpOrder.update({ answer, answer_at: new Date() });

    await helpOrder.save();

    await Queue.add(AnswerMail.key, {
      helpOrder,
    });

    return res.json({ helpOrder });
  }
}

export default new AdminHelpOrderController();

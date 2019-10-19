import * as Yup from 'yup';

import Plan from '../models/Plan';

class PlanController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const plans = await Plan.findAll({
      attributes: ['id', 'title', 'duration', 'price'],
      sort: { createdAt: 'desc' },
      limit: 20,
      offset: (page - 1) * 20,
    });

    return res.json(plans);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      duration: Yup.number()
        .positive()
        .required(),
      price: Yup.number()
        .positive()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const planExists = await Plan.findOne({ where: { title: req.body.title } });

    if (planExists) {
      return res.status(400).json({ error: 'This plan already exists.' });
    }

    const { id, title, duration, price } = await Plan.create(req.body);

    return res.json({ id, title, duration, price });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      duration: Yup.number()
        .positive()
        .required(),
      price: Yup.number()
        .positive()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const { title } = req.body;

    const plan = await Plan.findByPk(req.params.planId);

    if (!plan) {
      return res.status(404).json({
        error: 'Plan with this given ID was not found.',
      });
    }

    if (plan !== plan.title) {
      const planExists = await Plan.findOne({ where: { title } });

      if (planExists) {
        return res.status(400).json({ error: 'This plan already exists.' });
      }
    }

    const { id, duration, price } = await plan.update(req.body);

    return res.json({
      id,
      title,
      duration,
      price,
    });
  }

  async delete(req, res) {
    const plan = await Plan.findByPk(req.params.planId);

    if (!plan) {
      return res.status(404).json({
        error: 'Plan with this given ID was not found.',
      });
    }

    await Plan.destroy({
      where: { id: req.params.planId },
    });

    return res.json();
  }
}

export default new PlanController();

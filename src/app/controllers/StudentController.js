import * as Yup from 'yup';

import Student from '../models/Student';

class StudentController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const students = await Student.findAll({
      attributes: ['id', 'name', 'email', 'birthday', 'weight', 'height'],
      sort: { createdAt: 'desc' },
      limit: 20,
      offset: (page - 1) * 20,
    });

    return res.json(students);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      birthday: Yup.date().required(),
      weight: Yup.number().required(),
      height: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const studentExists = await Student.findOne({
      where: { email: req.body.email },
    });

    if (studentExists) {
      return res.status(400).json({ error: 'This student already exists.' });
    }

    const { id, name, email, birthday, weight, height } = await Student.create(
      req.body
    );

    return res.json({ id, name, email, birthday, weight, height });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      birthday: Yup.date(),
      weight: Yup.number(),
      height: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const { email } = req.body;

    const student = await Student.findByPk(req.params.studentId);

    if (!student) {
      return res.status(404).json({
        error: 'Student with this given ID was not found.',
      });
    }

    if (email !== student.email) {
      const studentExists = await Student.findOne({ where: { email } });

      if (studentExists) {
        return res.status(400).json({ error: 'This student already exists.' });
      }
    }

    const { id, name, birthday, weight, height } = await student.update(
      req.body
    );

    return res.json({
      id,
      name,
      email,
      birthday,
      weight,
      height,
    });
  }

  async delete(req, res) {
    const student = await Student.findByPk(req.params.studentId);

    if (!student) {
      return res.status(404).json({
        error: 'Student with this given ID was not found.',
      });
    }

    await Student.destroy({
      where: { id: req.params.studentId },
    });

    return res.json();
  }
}

export default new StudentController();

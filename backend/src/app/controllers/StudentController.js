import * as Yup from 'yup';
import { Op } from 'sequelize';
import { parseISO, differenceInYears } from 'date-fns';

import Student from '../models/Student';

class StudentController {
  async index(req, res) {
    // With Query Params
    const { name } = req.query;

    if (name) {
      const students = await Student.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
      });

      return res.status(200).json(students);
    }

    // All Students

    const { page = 1 } = req.query;

    const students = await Student.findAll({
      order: [['createdAt', 'DESC']],
      limit: 20,
      offset: (page - 1) * 20,
    });

    return res.json(students);
  }

  async show(req, res) {
    const student = await Student.findOne({
      where: { id: req.params.studentId },
      attributes: ['id', 'name', 'email', 'birthday', 'weight', 'height'],
    });

    if (!student) {
      return res.status(404).json({
        error: 'Student with this given ID was not found.',
      });
    }

    return res.json(student);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      birthday: Yup.date().required(),
      weight: Yup.number()
        .positive()
        .required(),
      height: Yup.number()
        .positive()
        .required(),
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

    // get age

    const { birthday } = req.body;
    const parsedBirthday = parseISO(birthday);

    const age = differenceInYears(new Date(), parsedBirthday);

    const { id, name, email, weight, height, created_at } = req.body;

    // create student

    await Student.create({
      id,
      name,
      email,
      weight,
      height,
      birthday: parsedBirthday,
    });

    return res.json({
      id,
      name,
      email,
      birthday,
      age,
      weight,
      height,
      updated_at: created_at,
    });
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

    // get age

    const { birthday } = req.body;
    const parsedBirthday = parseISO(birthday);

    const age = differenceInYears(new Date(), parsedBirthday);

    const { id, name, weight, height } = req.body;

    // update students

    await student.update({
      id,
      name,
      email,
      birthday: parsedBirthday,
      weight,
      height,
    });

    return res.json({
      id,
      name,
      email,
      birthday,
      age,
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

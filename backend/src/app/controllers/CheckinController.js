import { subDays, isAfter, isThisWeek } from 'date-fns';
import { Op } from 'sequelize';

import Checkin from '../models/Checkin';
import Student from '../models/Student';
import Registration from '../models/Registration';

class CheckinController {
  async index(req, res) {
    const student = req.params.studentId;

    if (!student) {
      return res.status(400).json({ error: 'This student was not found.' });
    }

    const checkins = await Checkin.findAll({
      order: [['createdAt', 'ASC']],
      where: {
        student_id: student,
      },
    });

    checkins.map(checkin => {
      const currentWeek = isThisWeek(new Date(checkin.createdAt));
      checkin.count = currentWeek;

      return checkin;
    });

    return res.json(checkins);
  }

  async store(req, res) {
    // find the student

    const student = await Student.findOne({
      where: { id: req.params.studentId },
      attributes: ['id', 'name', 'email'],
    });

    if (!student) {
      return res.status(400).json({ error: 'This student was not found.' });
    }

    // check if student is already registered in a plan and is plan is still valid.

    const isStudentEnrolled = await Registration.findOne({
      where: { student_id: student.id },
    });

    if (!isStudentEnrolled) {
      return res
        .status(400)
        .json({ error: 'This student is not enrolled to a plan.' });
    }

    if (!isAfter(isStudentEnrolled.end_date, new Date())) {
      return res
        .status(401)
        .json({ error: 'Your enrollment is no longer valid.' });
    }

    const checkins = await Checkin.findAll({
      where: {
        student_id: student.id,
        created_at: { [Op.between]: [subDays(new Date(), 7), new Date()] },
      },
    });

    let checkinCount = 1 + checkins.length;

    if (checkinCount >= 6) {
      return res
        .status(401)
        .json({ error: 'You have reached your checkin limit of 5 per week.' });
    }

    const checkin = await Checkin.create({ student_id: student.id });

    return res.json({ checkin });
  }
}

export default new CheckinController();

import Sequelize, { Model } from 'sequelize';
import Registration from './Registration';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        birthday: Sequelize.DATE,
        weight: Sequelize.DECIMAL,
        height: Sequelize.DECIMAL,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.hasOne(models.Registration, {
      foreignKey: 'student_id',
      as: 'student',
    });
  }
}

export default Student;

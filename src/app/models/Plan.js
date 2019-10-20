import Sequelize, { Model } from 'sequelize';

class Plan extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        duration: Sequelize.INTEGER,
        price: Sequelize.DECIMAL,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  // static associate(models) {
  //   this.hasMany(models.Registration, {
  //     foreignKey: 'plan_id',
  //     as: 'plan',
  //   });
  // }
}

export default Plan;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('students', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      birthday: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      weight: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      height: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('students');
  },
};

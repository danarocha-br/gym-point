module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gympass-db',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

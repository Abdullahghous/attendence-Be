const development = {
  database: 'attendence-app',
  username: 'postgres',
  password: '12345',
  host: 'localhost',
  dialect:'postgres',
};

const testing = {
  database: 'attendence-app',
  username: 'postgres',
  password: '12345',
  host: 'localhost',
  dialect:'postgres',
};

const production = {
  database: 'dbac1dld7c36u3',
  username: 'heguhowlzzzebo',
  password: '0660f08887c412d40a4615a0587b2f6e5e1827becd394d6f331743340eb75090',
  host: 'ec2-54-159-138-67.compute-1.amazonaws.com',
  dialect:'postgres',
};

// const production = {
//   database: process.env.DB_NAME,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   host: process.env.DB_HOST || 'localhost',
//   dialect: 'postgres',
// };

module.exports = {
  development,
  testing,
  production,
};

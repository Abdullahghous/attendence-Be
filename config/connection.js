const development = {
  database: 'attendence-app',
  username: 'postgres',
  password: '12345',
  host: 'localhost',
  dialect: 'postgres',
};

const testing = {
  database: 'attendence-app',
  username: 'postgres',
  password: '12345',
  host: 'localhost',
  dialect: 'postgres',
};

const production = {
  database: 'ddeihsiukn39ko',
  username: 'cyyxrgqssmerne',
  password: 'e8a507036cdc90b50fd1fec031bbc999787bc1bd0fe8d868499ff45afa93b0f5',
  host: 'ec2-3-216-181-219.compute-1.amazonaws.com',
  dialect: 'postgres',
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

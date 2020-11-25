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
  database: 'd336ee17j2cf93',
  username: 'ljduhgjvorznwk',
  password: '56d9ad57618523b3e1b93f6ef9906fb56129ed216dc273a0b820370f663304f1',
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

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
  database: 'd5sv77s670tcim',
  username: 'bolcpiqpgncdrr',
  password: 'd0d8f02ca21f59809f88fbd7b4759e41262fb0b1cbe830c67ab4e7c776b2b625',
  host: 'ec2-52-205-61-60.compute-1.amazonaws.com',
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

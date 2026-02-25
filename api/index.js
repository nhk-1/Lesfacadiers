const { handler } = require('../src/server');

module.exports = async (req, res) => {
  return handler(req, res);
};

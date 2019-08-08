// Artillery stress test functions

const generateIds = (context, events, done) => {
  context.vars['restaurant_id'] = Math.floor(Math.random() * 10000000) + 1;
  return done();
};

module.exports = {
  generateIds,
}

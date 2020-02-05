var apiKeys = ['foo', 'bar', 'baz'];

// these two objects will serve as our faux database

var repos = [
  { name: 'express', url: 'https://github.com/expressjs/express' },
  { name: 'stylus', url: 'https://github.com/learnboost/stylus' },
  { name: 'cluster', url: 'https://github.com/learnboost/cluster' }
];

var users = [{ name: 'tobi' }, { name: 'loki' }, { name: 'jane' }];

module.exports = { apiKeys, repos, users };

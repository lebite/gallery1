const cassandra = require('cassandra-driver');
const {CASSANDRA_USERNAME, CASSANDRA_PASSWORD} = require('../secrets');

const client = new cassandra.Client({ 
  contactPoints: ['3.15.168.100'], 
  authProvider: new cassandra.auth
   .PlainTextAuthProvider(CASSANDRA_USERNAME, CASSANDRA_PASSWORD),
  localDataCenter: 'datacenter1', 
  keyspace: 'ks_lebite' 
});

module.exports = client;

const planResolvers = require('./plan_resolvers');
const authResolvers = require('./auth_resolvers');

const lodash = require('lodash');

const resolvers = lodash.merge(planResolvers, authResolvers);

module.exports = resolvers;
const basicInfo = require('./basicInfo');
const components = require('./components');
const tasks = require('./users');

module.exports = {
    ...basicInfo,
    ...components,
    ...tasks,
};

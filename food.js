const _ = require("lodash");

const str = { "kebab": "roll", "burger": "pizza", "lasagna": "pasta" };

const food = _.invert(str);

module.exports = food;
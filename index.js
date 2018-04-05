const { parse } = require("./src");

module.exports = function jsonSort(obj, options) {
    if (!options) options = {};
    const spaces = options.spaces || 2;
    return parse(obj, { spaces });
};

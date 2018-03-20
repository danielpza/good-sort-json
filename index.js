module.exports = function (jsobject) {
    return JSON.stringify(sort(jsobject), null, 2);
};

function sort(obj) {
    const result = {};
    Object.keys(obj).sort().forEach((key) => {
        result[key] = obj[key];
    });
    return result;
}

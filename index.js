module.exports = function (jsobject) {
    return JSON.stringify(sort(jsobject), null, 2);
};

function sort(obj) {
    const result = {};
    Object.keys(obj).sort().forEach((key) => {
        if (obj[key] != null && typeof obj[key] === "object") {
            result[key] = sort(obj[key]);
        } else {
            result[key] = obj[key];
        }
    });
    return result;
}

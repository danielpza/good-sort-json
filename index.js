module.exports = function(jsobject, options) {
    if (!options) options = {};
    const spaces = options.spaces || 2;
    return JSON.stringify(sort(jsobject), null, spaces);
};

function sort(obj) {
    const literals = [];
    const objects = [];
    const arrays = [];
    const result = Array.isArray(obj) ? [] : {};
    Object.keys(obj).forEach((key) => {
        if (Array.isArray(obj[key])) {
            arrays.push(key);
        } else if (isObj(obj[key])) {
            objects.push(key);
        } else {
            literals.push(key);
        }
    });
    return Object.assign(
        result,
        orderSort(obj, literals),
        orderSort(obj, objects),
        orderSort(obj, arrays),
    );
}

function orderSort(obj, keys) {
    const result = Array.isArray(obj) ? [] : {};
    keys.sort().forEach((key) => {
        if (isObj(obj[key])) {
            result[key] = sort(obj[key]);
        } else {
            result[key] = obj[key];
        }
    });
    return result;
}

function isObj(value) {
    return value != null && typeof value === "object";
}

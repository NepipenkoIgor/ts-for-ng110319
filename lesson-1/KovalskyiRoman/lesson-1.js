function isInArray(arr) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args.every(function (item) { return arr.indexOf(item) !== -1; });
}
function summator() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var result = 0;
    args.forEach(function (item) {
        var itemNumber = (typeof item === 'string') ? parseInt(item) : item;
        result += itemNumber;
    });
    return result;
}
/*console.log('sum:', summator(0, '1', 2, '3', 4), 'expect 10');*/
function getUnique() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var uniqueArray = [];
    args.forEach(function (item) {
        if (uniqueArray.indexOf(item) === -1) {
            uniqueArray.push(item);
        }
    });
    return uniqueArray;
}
/*
console.log(getUnique(1, '2', true, {}, 2, true));
const testObj = {a: 1};
console.log(getUnique(1, '2', 1, testObj, {a: 2}, false, testObj));*/
function toMatrix(arr, rowSize) {
    var mutatedArray = arr.slice();
    var resultArray = [];
    while (mutatedArray.length) {
        resultArray.push(mutatedArray.splice(0, rowSize));
    }
    return resultArray;
}
console.log(toMatrix([1, 2, 3, 4, 5, 6, 7], 2));
console.log(toMatrix([1, 2, 3, 4, 5, 6, 7], 4));

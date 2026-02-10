/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    var newArr = []
    for (let i = 0; i < arr.length; i++) {
        var value = fn(arr[i], i)
        newArr.push(value)
    }
    return newArr
};
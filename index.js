// Excercise 1 - Even Numbers
function even(array) {
    let evenArray = array.filter(num => num % 2 == 0)
    return evenArray
}

// ###############################################################################

// Excercise 2 - Largest number
function largest(array) {
    return Math.max(...array)
}
// Another Solution
function largestNum(array) {
    return array.reduce(function (total, current) {
        return (total > current) ? total : current;
    })
}

// ###################################################################################

// Excercise 3 - Reverse a string
function reverseString(str) {
    let reversedArray = [];
    str.split('').forEach(function (char) {
        reversedArray.unshift(char)
    })
    return reversedArray.join('')
}

// Another Solution
function reverseStr(str) {
    return str.split('').reverse().join('');
}

// #######################################################################################

// Excercise 4 - Remove duplicates from an array

function removeDuplicates(array) {
    let uniqueArray = [];
    array.forEach(function (item) {
        if (!uniqueArray.includes(item)) {
            uniqueArray.push(item)
        }
    })
    return uniqueArray
}

// Another Solution
function rmvDuplicates(array) {
    return [...new Set(array)];
}
// #######################################################################################

function reverseString(str, newStr = '') {
    for (let n = str.length; n >= 0 ; n--) {
        newStr += str.charAt(n)
    }
    return newStr
}

module.exports = reverseString;
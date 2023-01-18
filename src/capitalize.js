function capitalize(str) {
    const firstLetter = str.charAt(0)
    const upper = firstLetter.toUpperCase()
    const rest= str.slice(1, str.length)
    return upper + rest
}

module.exports = capitalize;
function test(str) {
    for (let i = 0; i < str.length - 1; i++) {
        if (str.indexOf(str[i], i + 1) >= 0) {
            return false
        }
    }
    return true
}

let a = test('123')
console.log('a :', a)

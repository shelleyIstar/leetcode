/**
 * leetcode
 * 459. 重复的子字符串
 */

function test(str) {
    let reg = /^(\w+)\1+$/
    return reg.test(str)
}

let a = test('abcabch')
console.log('a :', a)

/**
 * 字符串
 * 1. string api:
 *      split() 参数字符串或正则
 *      match() []可选项 /w' 匹配单词和'(let't)
 *
 */

// export default (str) => {
//     let arr = str.split(' ')
//     let result = arr && arr.map(item => {
//         return item.split('').reverse().join('')
//     })
//     return result.join(' ')
// }

export default (str) => {
    return str.split(/\s/g).map(item => {
        return item.split('').reverse().join('')
    }).join(' ')
}

// export default (str) => {
//     return str.match(/[\w']+/g).map(item => {
//         return item.split('').reverse().join('')
//     }).join(' ')
// }

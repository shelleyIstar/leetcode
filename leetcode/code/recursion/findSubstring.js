/**
 * leetcode 30
 */

const data = (str, words) => {
    if (!words.length) return []
    if (!str) return []
    let oneWordLen = words[0].length
    if (!oneWordLen) return []
    let wordsLen = words.length * oneWordLen
    let strLen = str.length
    let wordMap = {}
    let result = []
    words && words.map(item => {
        wordMap[item] ? wordMap[item]++ : wordMap[item] = 1
    })
    console.log('wordMap', wordMap)
    for (let i = 0; i < strLen - wordsLen + 1; i++) {
        let tmpChildStr = str.slice(i, i + wordsLen)
        let tmpWordMap = Object.assign({}, wordMap)
        for (let j = 0; j < wordsLen - oneWordLen + 1; j++) {
            if (tmpWordMap[tmpChildStr.slice(j, j + oneWordLen)]) {
                tmpWordMap[tmpChildStr.slice(j, j + oneWordLen)]--
            }
            j += oneWordLen - 1
        }
        if (Object.values(tmpWordMap).every(i => i === 0)) {
            result.push(i)
        }
    }
    return result
}

// const a = data('12foobarfoo123,barfoo', ['foo', 'bar'])
// console.log('b', a)
const a = data('12foobarfoo123,barfoo', ['', ''])
console.log('b', a)

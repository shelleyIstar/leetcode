/**
 * leetcode 3 滑动解决
 */

const data = str => {
    if (!str.length) return 0
    let tmpStr = ''
    let maxStrLen = 0
    let len = str.length
    let left = 0
    for (let i = 0; i < len; i++) {
        if (tmpStr.indexOf(str[i]) !== -1) {
            left += (str.slice(left, i).indexOf(str[i]) + 1)
            continue
        }
        tmpStr = str.slice(left, i + 1)
        maxStrLen = Math.max(maxStrLen, tmpStr.length)
    }
    return maxStrLen
}

// const d = data('bbtablud')
const d = data('abcabcbb')
// const d = data('nnnnn')
// const d = data('')
console.log('d', d)

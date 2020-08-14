/**
 * leetcode 47 复原ip地址
 */

const operation = str => {
    let data = []
    // 递归运算
    let opt = (cur, sub) => {
        if (sub.length > 12) {
            return
        }
        if (cur.length === 4 && cur.join('') === str) {
            data.push(cur.join('.'))
        } else {
            for (let i = 0, tmp; i < Math.min(3, sub.length); i++) {
                tmp = sub.substr(0, i + 1)
                if (parseInt(tmp) < 256) {
                    opt(cur.concat([parseInt(tmp)]), sub.substr(i + 1))
                }
            }
        }
    }
    opt([], str)
    return data
}

let a = operation('25525501135')
console.log('a', a)

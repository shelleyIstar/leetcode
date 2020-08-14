const data = (str) => {
    let result = []
    let search = (cur, sub) => {
        if (cur.length === 4 && cur.join('') === str) {
            return result.push(cur.join('.'))
        } else {
            for (let i = 0; i < Math.min(3, sub.length); i++) {
                let tmp = sub.slice(0, i + 1)
                if (parseInt(tmp) < 256) {
                    search(cur.concat([tmp]), sub.slice(i + 1))
                }
            }
        }
    }
    search([], str)
    return result
}

const test = data('25525511135')
console.log('test', test)

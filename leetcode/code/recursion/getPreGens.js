/**
 * 求一个数的质数因子
 * 输入 180
 * 输出 2 2 3 3 5
 */

const test = (num) => {
    let res = []
    for (let i = 2; i < num; i++) {
        console.log('i', i, num)
        while (num % i === 0) {
            num = num / i
            res.push(i)
        }
    }
    if (num > 1) {
        res.push(num)
    }
    res = res.join(' ') + ' '
    return res
}

const t = test(180)
console.log('t', t)

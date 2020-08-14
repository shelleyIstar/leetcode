function test(n) {
    // 递归求二进制
    let re = (n) => {
        if (n === 0) {
            return ['0']
        } else if (n === 1) {
            return ['0', '1']
        } else {
            let pre = re(n - 1)
            let max = Math.pow(2, n) - 1
            console.log('max :', max)
            let result = []
            for (let i = 0; i < pre.length; i++) {
                result[i] = `0${pre[i]}`
                result[max - i] = `1${pre[i]}`
            }
            return result
        }
    }
    let stringArr = re(n)
    let numArr = stringArr.map(item => {
        return parseInt(item, 2)
    })
    return numArr
}

let a = test(0)
console.log('a :', a)

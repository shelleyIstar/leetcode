export default (str) => {
    // function test(str) {
    // 电话数字映射成数组
    let map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    // 将输入的字符串分割为数组
    let num = str.split('')

    // 将输入的数字映射成数组
    let tel = []
    num && num.map(item => {
        if (map[item]) {
            tel.push(map[item])
        }
    })
    if (tel.length < 1) {
        return []
    }
    if (tel.length === 1) {
        return tel[0].split('')
    }
    const del = tel
    // 组合
    let code = (arr) => {
        let tmp = []
        for (let i = 0; i < arr[0].length; i++) {
            for (let j = 0; j < arr[1].length; j++) {
                tmp.push(`${arr[0][i]}${arr[1][j]}`)
            }
        }
        arr.splice(0, 2, tmp)
        if (arr.length > 1) {
            code(arr)
        } else {
            return tmp
        }
        return arr[0]
    }
    // let b = code(del)
    // console.log('code(tel) b', b, del)
    // let c = code(del)
    // console.log('code(tel) c', c, del)
    return code(del)
}

// let a = test('23')
// console.log('a', a)

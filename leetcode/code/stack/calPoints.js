/**
 * 682 棒球比赛
 */

const calPoints = (arr) => {
    let result = []
    let pre1,
        pre2
    arr.map((item, index) => {
        switch (item) {
            case '+':
                if (index - 2 >= 0) {
                    pre1 = result.pop()
                    pre2 = result.pop()
                    result.push(pre2 * 1, pre1 * 1, pre2 * 1 + pre1 * 1)
                } else if (index - 1 >= 0) {
                    pre1 = result.pop()
                    result.push(pre1 * 1, pre1 * 1)
                }
                break
            case 'C':
                result.pop()
                break
            case 'D':
                if (index - 1 >= 0) {
                    pre1 = result.pop()
                    result.push(pre1 * 1, pre1 * 2)
                }
                break
            default:
                result.push(item * 1)
                break
        }
    })
    return result.reduce((total, num) => total + num)
}

const test = calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+'])
console.log('test', test)

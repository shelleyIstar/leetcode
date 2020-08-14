/**
 * leetcode 30
 */
const data = (str, words) => {
    let result = []
    let num = words.length
    let range = (r, _arr) => {
        if (r.length === num) {
            // console.log('result r:', r)
            result.push(r)
        } else {
            // console.log(`r: ${r}, _arr: ${_arr}`)
            _arr.map((item, index) => {
                // console.log('item:', item)
                let tmp = [].concat(_arr)
                tmp.splice(index, 1)
                // console.log('tmp:', tmp)
                // console.log('r.concat(item):', r.concat(item))
                range(r.concat(item), tmp)
            })
        }
    }
    range([], words)
    let d = result.map(item => {
        return str.indexOf(item.join(''))
    }).filter(i => i !== -1)
    return d
}

const a = data('foobartestthebarfootestman', ['foo', 'bar', 'test'])
console.log('b', a)

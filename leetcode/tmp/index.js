const data = (str, words) => {
    let m = words.every(item => {
        console.log(item)
        return item.length >= 3
    })
    console.log('m', m)
    return []
}

const d = data('foobartestfoofoobartest', ['foo', 'bar', 'test'])
console.log('d', d)

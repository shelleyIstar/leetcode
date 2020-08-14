export default (str) => {
    let r = []
    let match = (item) => {
        let s = item.match(/^(0+|1+)/g)[0]
        let m = (s[0] ^ 1).toString().repeat(s.length)
        // let o = item.match(`${s}${m}`) && item.match(s + m)[0]
        // if (o) {
        //     return o
        // }
        let o = new RegExp(`^(${s}${m})`)
        if (o.test(item)) {
            let n = RegExp.$1
            // console.log('RegExp', RegExp.$1, n)
            return n
        } else {
            return ''
        }
    }
    for (let i = 0; i < str.length - 1; i++) {
        let sub = match(str.slice(i))
        if (sub) {
            r.push(sub)
        }
    }
    return r
}

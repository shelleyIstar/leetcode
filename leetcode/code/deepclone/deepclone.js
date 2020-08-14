const deepClone = (obj) => {
    if (typeof obj === 'null' || typeof obj !== 'object') {
        return obj
    }
    let result
    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = deepClone(obj[key])
        }
    }

    return result
}

var data = {
    a: 1,
    b: 2,
    c: [1, 2, 3, 4],
    d: {
        f: {
            g: 'test',
            h: [{
                h1: 'h1',
                h2: 10
            }]
        }
    }
}

const a = deepClone(data)
data.min = 1
console.log('a', a)
// console.log('data', data)

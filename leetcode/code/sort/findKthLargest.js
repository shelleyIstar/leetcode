/**
 * 215
*/
const a = (arr, k) => {
    for (let i = arr.length - 1; i > arr.length - 1 - k; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr[arr.length - k]
}

const b = a([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)
console.log('b', b)

/**
 * sort 性能比冒泡要低
 * sort((a,b)=>a-b) a-b 升序 b-a 降序
 *
 */
const c = (arr, k) => {
    return arr.sort((a, b) => b - a)[k - 1]
}

const d = c([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)
console.log('d', d)

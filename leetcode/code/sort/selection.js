/**
 * 选择排序 (找最小)
 * 平均时间复杂度O(n2)
 * 空间复杂度 O(1)
 * 用到了es6的数组解构[a,b]=[b,a]
 */

const a = (arr) => {
    for (let i = 0, min; i < arr.length; i++) {
        min = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < min) {
                let c = min
                min = arr[j]
                arr[j] = c
                    // [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
        arr[i] = min
    }
    return arr
}

// const b = a([2, 1, 3, 5, 6, 6, 0, 5, 4])
const b = a([3, 56, 1, 2, 86, 23, 75, 11, 55, 0, 4])
console.log('b', b)
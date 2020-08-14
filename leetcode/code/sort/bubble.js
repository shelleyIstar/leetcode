/**
 * 简单冒泡排序 (找最大)
 * 平均时间复杂度O(n2)
 * 空间复杂度 O(1)
 * 用到了es6的数组解构[a,b]=[b,a]
 */

const a = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            // tmp = arr[j]
            if (arr[j] > arr[j + 1]) {
                //     arr[j] = arr[j + 1]
                //     arr[j + 1] = tmp
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

const data = a([1, 2, 3, 2.3, 4])
console.log('data', data);
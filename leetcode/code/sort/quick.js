/**
 * 快速排序
 * in-place 不增加多余内存，利用交换来排序
 * 1. 找一个基准位置，大的放基准右边，小的放基准左边
 * 2. 左边进行排序，右边进行排序, 递归操作，递归的边界，如果left<right持续递归，否则就不进行递归
 */

const quick = (arr) => {
    let swap = (arr, i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    let findCenter = (arr, left, right) => {
        let flag = arr[left]
        let idx = left + 1
        for (let i = idx; i <= right; i++) {
            if (arr[i] < flag) {
                swap(arr, idx, i)
                idx++
            }
        }
        swap(arr, left, idx - 1)
        return idx
    }
    let sort = (arr, left, right) => {
        if (left < right) {
            let center = findCenter(arr, left, right)
            sort(arr, left, center - 1)
            sort(arr, center, right)
        }
    }
    sort(arr, 0, arr.length - 1)
    return arr
}

const data = quick([2, 3, 1, 4, 6, 2, 0])
console.log('dada', data)

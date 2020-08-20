class Heap {
    constructor(data) {
        this.data = data
    }

    sort() {
        let iArr = this.data
        let n = iArr.length
        if (n <= 1) {
            return iArr
        } else {
            for (let i = Math.floor(n / 2); i >= 0; i--) {
                Heap.maxHeapify(iArr, i, n)
            }
            for (let j = 0; j < n; j++) {
                Heap.swap(iArr, 0, n - 1 - j)
                Heap.maxHeapify(iArr, 0, n - 1 - j - 1)
            }
            return iArr
        }

    }

    // 交换两个元素
    static swap(arr, a, b) {
        if (a === b) {
            return ''
        }
        let c = arr[a]
        arr[a] = arr[b]
        arr[b] = c
    }

    // 构建最大堆的过程 Arr 数组；i节点；size有效长度
    static maxHeapify(Arr, i, size) {
        // 左节点(索引)
        let left = i * 2 + 1
            // 右节点 
        let right = i * 2 + 2
        let largest = i
            // 父节点i和左节点left做比较取最大值
        if (left <= size && Arr[left] > Arr[largest]) {
            largest = left
        }
        // 父节点i和右节点right做比较取最大值
        if (right <= size && Arr[right] > Arr[largest]) {
            largest = right
        }
        // 做交换
        if (largest !== i) {
            Heap.swap(Arr, i, largest)
            Heap.maxHeapify(Arr, largest, size)
        }

    }

}
var findKthLargest = function(nums, k) {
    let heap = new Heap(nums);
    let tmp = heap.sort();
    tmp.reverse();
    return tmp[k - 1]
};


// let d = [3, 2, 1, 5, 6, 4]
// let a = new Heap(d)
// let b = a.sort()
// b.reverse()
// console.log(b[1])
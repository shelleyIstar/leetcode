/**
 * leetcode 621 任务调度器
 * 输入：tasks = ["A","A","A","B","B","B"], n = 2
 * 输出：8
 * 解释：A -> B -> (待命) -> A -> B -> (待命) -> A -> B.
 */

const leastInterval = (tasks, n) => {
    let taskClass = {}
    tasks.map(item => {
        if (taskClass[item]) {
            taskClass[item]++
        } else {
            taskClass[item] = 1
        }
    })
    console.log('taskc', taskClass)
    let q = []
    while (1) {
        if (!Object.keys(taskClass)[0]) {
            break
        }
        let keys = Object.keys(taskClass)
        let tmp = []
        // n+1一组
        for (let i = 0; i < n + 1; i++) {
            let max = 0
            let key
            let pos
            keys.map((item, index) => {
                if (taskClass[item] > max) {
                    max = taskClass[item]
                    key = item
                    pos = index
                }
            })
            if (key) {
                tmp.push(key)
                keys.splice(pos, 1)
                taskClass[key]--
                if (taskClass[key] < 1) {
                    delete taskClass[key]
                }
            } else {
                break
            }
        }
        q += tmp.join('').padEnd(n + 1, '-')
    }
    q = q.replace(/[-]+$/g, '')
    return q.length
}

const test = leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 3)
console.log('test', test)

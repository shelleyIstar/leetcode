import bubble from '../../code/sort/bubble'

test('bubble([3,2,1,5,2])', () => {
    expect(bubble([3, 2, 1, 5, 2])).toEqual([1, 2, 2, 3, 5])
})

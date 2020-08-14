import cardArray from '../../code/array/card'

test('cardArray()', () => {
    expect(cardArray([1, 2, 3, 4, 4, 3, 2, 1])).toEqual(true)
})

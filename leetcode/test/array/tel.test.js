import arrayTel from '../../code/array/tel'

test('arrayTel(23)', () => {
    expect(arrayTel('23')).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
})

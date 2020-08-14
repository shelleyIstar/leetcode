import subString from '../../code/string/string_macht'

test('subString(00110011)', () => {
    expect(subString('00110011')).toEqual(['0011', '01', '1100', '10', '0011', '01'])
})

test('subString(10101)', () => {
    expect(subString('10101')).toEqual(['10', '01', '10', '01'])
})

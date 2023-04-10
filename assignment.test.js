const assignment = require('./assignment');


describe('#capitalize(str)', () => {
    test('capitalize the first letter of the string hello.', () => {
        expect(assignment.capitalize('hello')).toBe('Hello');
    })
})

describe('#reverseString(string)', () => {
    test('reversing the string hello to olleh', () => {
        expect(assignment.reverseString('hello')).toBe('olleh');
    })
})

describe('#calculator()', () => {
    describe('add(x, y)', () => {
        test('adds 1 and 2 for a sum of 3.', () => {
            expect(assignment.calculator.add(1, 2)).toBe(3);
        })
    })
    describe('#subtract(x, y)', () => {
        test('subtracts 3 and 2 to get 1', () => {
            expect(assignment.calculator.subtract(3, 2)).toBe(1);
        })
    })
    describe('#divide(x, y)', () => {
        test('divides 4 and 2 to get 2, and 4 and 0 to get cannot divide by 0', () => {
            expect(assignment.calculator.divide(4, 2)).toBe(2);
            expect(assignment.calculator.divide(4, 0)).toBe('cannot divide by 0');
        })
    })
    describe('#multiply(x, y)', () => {
        test('multiplies 3 and 5 to get 15', () => {
            expect(assignment.calculator.multiply(3, 5)).toBe(15);
        })
    })
    describe('#caesarCipher(plaintext, key', () => {
        test('takes the plaintext heLLo zeBra!123 and shifts by 3 to produce the ciphertext khOOr chEud!123', () => {
            expect(assignment.ceasarCipher('heLLo zeBra!123', 3)).toBe('khOOr chEud!123')
        }) 
    })
    describe('#analyzeArray(numberArray)', () => {
        test('takes the array [1, 8, 3, 4, 2, 6] and returns an object of { average: 4, min: 1, max: 8, length: 6 }', () => {
            expect(assignment.analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({average: 4, min: 1, max: 8, length: 6})
        })
    })
    
})


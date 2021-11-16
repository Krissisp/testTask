import { expect, it } from '@jest/globals';
import sumToMinNum from '../src/index.js';


it('test: empty array', () => {
    expect(sumToMinNum([])).toBe(0)
})

it('test', () => {
    expect(sumToMinNum([0, -2, 28, 33, -4])).toBe(-6)
})

it('test: long array', () => {
    expect(sumToMinNum([0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 3, 554, 15 ])).toBe(1)
})

it('test: repeat numbers', () => {
    expect(sumToMinNum([-10, -10, 2, 3, -15, 16, 3, 554, 15 ])).toBe(-25)
})

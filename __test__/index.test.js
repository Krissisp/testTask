import { expect, it } from '@jest/globals';
import sumTwoMinNum from '../src/index.js';


it('test: empty array', () => {
    expect(sumTwoMinNum([])).toBe(0)
})

it('test: singular', () => {
    expect(sumTwoMinNum([5])).toBe(5)
})

it('test: two numbers', () => {
    expect(sumTwoMinNum([1, 6])).toBe(7)
})

it('test', () => {
    expect(sumTwoMinNum([0, -2, 28, 33, -4])).toBe(-6)
})

it('test: long array', () => {
    expect(sumTwoMinNum([0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 3, 554, 15 ])).toBe(1)
})

it('test: repeat numbers', () => {
    expect(sumTwoMinNum([-10, -10, 2, 3, -15, 16, 3, 554, 15 ])).toBe(-25)
})

it('test: less than the maximum and more than the minimum', () => {
    expect(sumTwoMinNum([6, 4, 5])).toBe(9)
})



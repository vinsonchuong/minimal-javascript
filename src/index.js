import {assertEqual} from './assert'

function factorsOf(number) {
  const factors = []
  let divisor = 2
  while (divisor <= number) {
    while (number % divisor === 0) {
      factors.push(divisor)
      number = number / divisor
    }
    divisor = divisor + 1
  }
  return factors
}

assertEqual(factorsOf(1), [])
assertEqual(factorsOf(2), [2])
assertEqual(factorsOf(3), [3])
assertEqual(factorsOf(4), [2, 2])
assertEqual(factorsOf(5), [5])
assertEqual(factorsOf(6), [2, 3])
assertEqual(factorsOf(7), [7])
assertEqual(factorsOf(8), [2, 2, 2])
assertEqual(factorsOf(9), [3, 3])
assertEqual(factorsOf(2 * 5 * 5 * 7 * 11 * 23), [2, 5, 5, 7, 11, 23])

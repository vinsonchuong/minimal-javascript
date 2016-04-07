'use strict';

function arraysEqual(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return false;
  }
  return array1.length === array2.length &&
    array1.every((element, index) => array2[index] === element)
}

function toString(value) {
  return (
    Array.isArray(value) ? `[${value.map(toString).join(', ')}]` :
    Object.is(undefined, value) ? 'undefined' :
    Object.is(null, value) ? 'null' :
    value.toString()
  )
}

function assertEqual(actual, expected) {
  if (
    actual === expected ||
    arraysEqual(actual, expected)
  ) {
    return
  }

  throw new Error(`Expected ${toString(actual)} to equal ${toString(expected)}`)
}

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

function sort(array) {
  if (array[0] > array[1]) {
    return [array[1], array[0]].concat(array.slice(2))
  }
  if (array[1] > array[2]) {
    return [array[0]].concat([array[2], array[1]])
  }
  return array
}

assertEqual(sort([]), [])
assertEqual(sort([1]), [1])
assertEqual(sort([1, 2]), [1, 2])
assertEqual(sort([2, 1]), [1, 2])
assertEqual(sort([1, 2, 3]), [1, 2, 3])
assertEqual(sort([2, 1, 3]), [1, 2, 3])
assertEqual(sort([1, 3, 2]), [1, 2, 3])

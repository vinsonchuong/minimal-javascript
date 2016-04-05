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
  if (number > 1) {
    while (number % 2 === 0) {
      factors.push(2)
      number = number / 2
    }
  }
  if (number > 1) {
    factors.push(number)
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

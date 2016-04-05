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
    factors.push(number)
  }
  return factors
}

assertEqual(factorsOf(1), [])
assertEqual(factorsOf(2), [2])
assertEqual(factorsOf(3), [3])

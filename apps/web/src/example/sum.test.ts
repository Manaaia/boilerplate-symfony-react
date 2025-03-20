// Description: Example test file for sum function.
// This file demonstrates how to write tests for a function.
// It tests the sum function in the sum.ts file.
// It uses the vitest testing framework to write the tests.

import { expect, test } from 'vitest'
import { sum } from './sum'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

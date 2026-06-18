/**
 * @file E2E Tests - api
 * @module mark-util-symbol/tests/e2e/api
 */

import * as testSubject from '@flex-development/mark-util-symbol'

describe('e2e:mark-util-symbol', () => {
  it('should expose public api', () => {
    expect(Object.keys(testSubject)).toMatchSnapshot()
  })
})

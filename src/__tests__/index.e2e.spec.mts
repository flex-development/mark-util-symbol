/**
 * @file E2E Tests - api
 * @module fsm-util-symbol/tests/e2e/api
 */

import * as testSubject from '@flex-development/fsm-util-symbol'

describe('e2e:fsm-util-symbol', () => {
  it('should expose public api', () => {
    expect(Object.keys(testSubject)).toMatchSnapshot()
  })
})

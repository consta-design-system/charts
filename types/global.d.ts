import T from 'react-test-renderer'
import * as TL from '@testing-library/react'
import { mocked as TM } from 'ts-jest/utils'

import 'jest-extended'
import '@testing-library/jest-dom'

declare global {
  const TestRenderer: typeof T
  const TestLibrary: typeof TL
  const TestMocked: typeof TM
}

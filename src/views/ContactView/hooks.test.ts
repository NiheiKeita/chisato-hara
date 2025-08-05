import { renderHook } from '@testing-library/react'
import { useContactView } from './hooks'

describe('useContactView', () => {
  it('should return empty object', () => {
    const { result } = renderHook(() => useContactView())

    expect(result.current).toEqual({})
  })
})
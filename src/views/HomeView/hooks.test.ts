import { renderHook, act } from '@testing-library/react'
import { useHomeView } from './hooks'
import { beforeEach, describe, expect, it } from 'vitest'
import { fn } from '@storybook/test'

const mockScrollY = 100

const mockAddEventListener = fn()
const mockRemoveEventListener = fn()

Object.defineProperty(window, 'addEventListener', {
  value: mockAddEventListener,
})

Object.defineProperty(window, 'removeEventListener', {
  value: mockRemoveEventListener,
})

Object.defineProperty(window, 'scrollY', {
  value: mockScrollY,
  writable: true,
})

describe('useHomeView', () => {
  beforeEach(() => {
    mockAddEventListener.mockClear()
    mockRemoveEventListener.mockClear()
  })

  it('should initialize with correct default values', () => {
    const { result } = renderHook(() => useHomeView())

    expect(result.current.hoveredCard).toBe(null)
    expect(Object.keys(result.current.works).length).toBe(4)
    expect(result.current.setHoveredCard).toBeInstanceOf(Function)
  })

  it('should return works data correctly', () => {
    const { result } = renderHook(() => useHomeView())

    expect(result.current.works.videos[0]).toEqual({
      id: 1,
      title: "映像作品 1",
      year: "2024",
      image: "/works/video1.jpg",
      description: "映像を用いた表現作品",
      videoUrl: "https://example.com/video1"
    })
  })

  it('should update hoveredCard state', () => {
    const { result } = renderHook(() => useHomeView())

    act(() => {
      result.current.setHoveredCard(1)
    })

    expect(result.current.hoveredCard).toBe(1)

    act(() => {
      result.current.setHoveredCard(null)
    })

    expect(result.current.hoveredCard).toBe(null)
  })

})
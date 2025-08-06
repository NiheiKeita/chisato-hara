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

    expect(result.current.scrollY).toBe(0)
    expect(result.current.hoveredCard).toBe(null)
    expect(result.current.artworks).toHaveLength(6)
    expect(result.current.setHoveredCard).toBeInstanceOf(Function)
  })

  it('should return artwork data correctly', () => {
    const { result } = renderHook(() => useHomeView())

    expect(result.current.artworks[0]).toEqual({
      id: 1,
      title: "夏の風景",
      medium: "Oil on Canvas",
      year: "2024",
      image: "/artworks/artwork1.jpg",
      description: "美しい夏の自然を表現した作品"
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

  it('should add scroll event listener on mount', () => {
    renderHook(() => useHomeView())

    expect(mockAddEventListener).toHaveBeenCalledWith('scroll', expect.any(Function))
  })

  it('should remove scroll event listener on unmount', () => {
    const { unmount } = renderHook(() => useHomeView())

    unmount()

    expect(mockRemoveEventListener).toHaveBeenCalledWith('scroll', expect.any(Function))
  })
})
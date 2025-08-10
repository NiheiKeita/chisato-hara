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
    expect(Object.keys(result.current.works).length).toBe(5)
    expect(result.current.setHoveredCard).toBeInstanceOf(Function)
    expect(result.current.selectedImage).toBe(null)
    expect(result.current.openImageModal).toBeInstanceOf(Function)
    expect(result.current.closeImageModal).toBeInstanceOf(Function)
  })

  it('should return works data correctly', () => {
    const { result } = renderHook(() => useHomeView())

    expect(result.current.works.videos[0]).toEqual({
      id: 1,
      title: "「いま、いま、いま、いま」①",
      year: "2024",
      image: "/images/video/「いま、いま、いま、いま」①.jpg",
      description: "Video work exploring temporal expression",
      videoUrl: "https://example.com/video1"
    })

    expect(result.current.works.photography).toBeDefined()
    expect(result.current.works.photography.length).toBeGreaterThan(0)
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

  it('should handle image modal state', () => {
    const { result } = renderHook(() => useHomeView())

    expect(result.current.selectedImage).toBe(null)

    act(() => {
      result.current.openImageModal('/test.jpg', 'Test Title', 'Test Description')
    })

    expect(result.current.selectedImage).toEqual({
      src: '/test.jpg',
      title: 'Test Title',
      description: 'Test Description'
    })

    act(() => {
      result.current.closeImageModal()
    })

    expect(result.current.selectedImage).toBe(null)
  })

})
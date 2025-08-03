import React from 'react'
import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import { describe, it, expect } from 'vitest'
import { CountView } from "."


describe("画面のテスト", () => {
  it("画面のテスト", async () => {
    const { container } = render(<CountView />)
    expect(container).toHaveTextContent("カウントアップ")
  })
})
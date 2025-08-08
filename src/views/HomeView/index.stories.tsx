import type { Meta, StoryObj } from '@storybook/react'
import HomeView from './index'

const meta = {
  title: 'Views/HomeView',
  component: HomeView,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof HomeView>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
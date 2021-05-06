import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import projects from '../../__mocks__/projects'
import ProjectSlideshow from './ProjectSlideshow'

const mockProject = projects[0]
const mockNext = jest.fn()
const mockPrevious = jest.fn()

jest.mock('../../lib/useProject', () => ({
  useProject: () => ({
    activeKey: '--',
    next: () => mockNext(),
    previous: () => mockPrevious(),
  }),
}))

describe('ProjectSlideshow', () => {
  afterEach(() => jest.clearAllMocks())

  const renderComponent = (project = mockProject) => render(<ProjectSlideshow project={project} />)

  it('renders correctly for projects with a statement', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })

  it('renders correctly for projects with captions', () => {
    const { container } = renderComponent(projects[1])
    expect(container).toMatchSnapshot()
  })

  describe('Keyboard navigation', () => {
    const expectKeyupToCall = (key, mock) => {
      renderComponent()
      expect(mock).not.toHaveBeenCalled()
      window.dispatchEvent(new KeyboardEvent('keyup', { key }))
      expect(mock).toHaveBeenCalled()
    }

    it('triggers next when right arrow key is pressed', () => {
      expectKeyupToCall('ArrowRight', mockNext)
    })

    it('triggers previous when left arrow key is pressed', () => {
      expectKeyupToCall('ArrowLeft', mockPrevious)
    })
  })

  describe('Mouse navigation', () => {
    const expectClickToCall = (element, mock) => {
      expect(mock).not.toHaveBeenCalled()
      fireEvent.click(element)
      expect(mock).toHaveBeenCalled()
    }

    it('triggers next when clicking a photo', () => {
      const { getByAltText } = renderComponent()
      const photo = getByAltText(`${mockProject.title} - ${mockProject.photos[0].key}`)
      expectClickToCall(photo, mockNext)
    })
  })

  describe('Touch navigation', () => {
    const expectSwipeToCall = (element, direction: 'left' | 'right', mock) => {
      const clientX = 10
      expect(mock).not.toHaveBeenCalled()
      fireEvent.touchMove(element, { touches: [{ clientX }] })
      expect(mock).not.toHaveBeenCalled()
      fireEvent.touchStart(element, { touches: [{ clientX }] })
      expect(mock).not.toHaveBeenCalled()
      const newClientX = direction === 'left' ? clientX - 5 : clientX + 5
      fireEvent.touchMove(element, { touches: [{ clientX: newClientX }] })
      expect(mock).toHaveBeenCalled()
    }

    it('triggers next when swiping a photo to the left', () => {
      const { getByAltText } = renderComponent()
      const photo = getByAltText(`${mockProject.title} - ${mockProject.photos[0].key}`)
      expectSwipeToCall(photo, 'left', mockNext)
    })

    it('triggers previous when swiping a photo to the right', () => {
      const { getByAltText } = renderComponent()
      const photo = getByAltText(`${mockProject.title} - ${mockProject.photos[0].key}`)
      expectSwipeToCall(photo, 'right', mockPrevious)
    })
  })
})

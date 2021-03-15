import slugify from 'slugify'
import { getProjects } from '../../lib/projects'

const mockSize = { width: 500, height: 400 }
const mockPhotos = Array.from(Array(5).keys()).map((item) => `${item}.jpg`)
const mockConfig = [
  {
    title: 'The first title',
    captions: mockPhotos.map((_, index) => ({ key: `${index}`, caption: `caption for ${index}` })),
  },
  {
    title: 'The second title',
    statement: 'The statement',
  },
]

jest.mock('js-yaml', () => ({
  load: jest.fn(() => mockConfig),
}))

jest.mock('fs', () => ({
  readdirSync: jest.fn(() => mockPhotos),
  readFileSync: jest.fn(),
}))

jest.mock('image-size', () => ({
  __esModule: true,
  default: jest.fn(() => mockSize),
}))

describe('getProjects', () => {
  test('it returns the projects asynchronously', async () => {
    const projects = await getProjects()
    expect(projects).toEqual(
      mockConfig.map((item) => ({
        title: item.title,
        slug: slugify(item.title.toLowerCase()),
        statement: item.statement ?? '',
        photos: mockPhotos.map((photo, index) => ({
          key: `${index}`,
          size: mockSize,
          caption: (item.captions ?? []).find((caption) => caption.key === `${index}`)?.caption ?? '',
          url: `/photos/${slugify(item.title.toLowerCase())}/${photo}`,
        })),
      })),
    )
  })
})

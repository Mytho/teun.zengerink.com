import fs from 'fs'
import path from 'path'
import slugify from 'slugify'
import sizeOf from 'image-size'

interface ConfigCaption {
  key: string
  caption: string
}

interface ConfigItem {
  title: string
  statement?: string
  captions?: ConfigCaption[]
}

export interface Photo {
  key: string
  url: string
  size: { width: number; height: number }
  caption?: string
}

export interface Project {
  title: string
  slug: string
  photos: Photo[]
  statement?: string
}

const generatePhotos = (slug: string, captions: ConfigCaption[]): Photo[] => {
  const photosDirectory = path.join(process.cwd(), 'public/photos', slug)
  const fileNames = fs.readdirSync(photosDirectory)

  return fileNames.map((filename) => {
    const key = path.basename(filename, '.jpg')
    const caption = captions?.find((c) => c.key == key)

    return {
      key,
      caption: caption ? caption.caption : '',
      url: `/photos/${slug}/${filename}`,
      size: sizeOf(path.join(photosDirectory, filename)),
    }
  })
}

const generateProjects = (item: ConfigItem[]): Project[] => {
  return item.map((project) => {
    const slug = slugify(project.title, { lower: true })

    return {
      title: project.title,
      statement: project.statement ? project.statement : '',
      slug,
      photos: generatePhotos(slug, project.captions),
    }
  })
}

const config: ConfigItem[] = [
  {
    title: 'Take, Make, Waste',
    statement: `Clothes, mobile phones, plastic packaging. Short life span and over production, aimed at single use and new models. We’re mostly focused on the end product.\n\nThe raw materials that are needed, the withdrawal of natural resources from the earth: we’re scarcely realising the influence on our living environment. What happens to the products after their life span has expired, is non-essential. Take, Make, Waste.\n\nThe impact of this mode of life on our habitat is big. This project is the result of a search for how this thinking pattern shapes the Western Harber of Amsterdam. Most of the time the effects are clearly visible in an industrial area. Sometimes the truth is disguised and hidden beneath the surface.`,
    captions: [
      {
        key: '01',
        caption: `Transshipment terminal at a former refinery. With a total capacity of over 1 million m3 divided over 69 tanks one of Amsterdam's most important terminals for gasoline and LPG.`,
      },
      {
        key: '02',
        caption: `The company states environmental protections is one of their core values. In their trade they adhere to the environmental standards. Apparently, complying to these standards equals environmental protection.`,
      },
      {
        key: '03',
        caption: `On the border of the port area a recreational attraction is being built. The hill is made out of 3 million m3 bottom ash, the residue of the nearby household waste incinerator. The responsible organisation points out it is an artwork.`,
      },
    ],
  },
  {
    title: 'Point of no Return',
    statement: `The bungee jumper on top of the bridge. Exactly at the point between safely on the edge and within free fall. The child on the swing. Precisely at the end of it’s backswing, right before it falls down with a thrilling sensation. Dead center. Mark of an ending, start of a new surprise.\n\nUsing Google Street View locations were visited where the online map ends dead. What is it that these locations have in common? What makes these locations unsuitable for visualisation in the largest digital network of streets? What can be found over that border, past the ending, for an unknown experience?`,
  },
  {
    title: 'Under Your Nose',
    statement: `Just swallow. You walk your dog there. Bring your kids for soccer. Sniff, while taking a detour, the fresh air. Everyday, under influence of the underworld. The shadow side unfolds itself in daylight. Under your nose.`,
  },
  {
    title: 'Fortress',
    statement: `Wind. Outside. Sand. Inside. Rain. Outside. Cover. Inside. Bullets whistle. Outside. Whisper. Inside. Concrete. Outside?\n\nSunlight. When you open your eyes. Wet leafs and grass. When you smell. Pressure on your chest. When you feel.\n\nHappy. Inside. Insecurity. Outside. Private space. Inside. Oppressive.`,
  },
  {
    title: 'Symbiosis',
    statement: `Humans and nature are mutually dependant on each other and their cohabitation is visible within the urban landscape. When designing spaces, nature gets assigned a strictly defined area. Green is crossing the boundaries, taking the territory humans intended to use for themselves. Humans and nature are intertwined, they interact in a field of tension.`,
  },
  {
    title: 'Untitled',
  },
]

export const getProjects = async (): Promise<Project[]> => await generateProjects(config)

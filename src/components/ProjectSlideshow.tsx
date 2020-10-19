import React, { useEffect } from 'react'
import { useRouter, NextRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import { Project, Photo } from '../lib/projectService'
import styles from './ProjectSlideshow.module.scss'

enum Key {
  LEFT = 'ArrowLeft',
  RIGHT = 'ArrowRight',
}

interface ProjectSlideshowProps {
  project: Project
}

class ProjectRouter {
  private router: NextRouter
  private project: Project

  constructor(router: NextRouter, project: Project) {
    this.router = router
    this.project = project

    if (this.project && !this.project.statement && this.activeKey() === undefined) {
      this.go(this.firstPhoto())
    }
  }

  private getSlideIndex(): number {
    return this.project.photos.findIndex((photo) => photo.key === this.activeKey())
  }

  private firstPhoto(): Photo {
    return this.project.photos[0]
  }

  private lastPhoto(): Photo {
    return [...this.project.photos].pop()
  }

  private nextPhoto(): Photo {
    return this.project.photos[this.getSlideIndex() + 1]
  }

  private previousPhoto(): Photo {
    return this.project.photos[this.getSlideIndex() - 1]
  }

  private isLast(): boolean {
    return this.activeKey() === this.lastPhoto().key
  }

  private isFirst(): boolean {
    return this.activeKey() === this.firstPhoto().key
  }

  private go(photo?: Photo): Promise<boolean> {
    const slug = `/work/${this.project.slug}`
    if (!photo) return this.router.push(slug)
    return this.router.push(`${slug}/${photo.key}`)
  }

  private pad(str: string, length: number): string {
    const output = str.toString()
    return output.length < length ? this.pad('0' + output, length) : output
  }

  isActive(photo: Photo): boolean {
    return this.activeKey() === photo.key
  }

  activeKey() {
    return this.router.query?.slug ? this.router.query?.slug[1] : undefined
  }

  countPhotos(length = 2) {
    return this.pad(this.project?.photos.length.toString(), length)
  }

  next() {
    if (this.project.statement) {
      if (!this.activeKey()) return this.go(this.firstPhoto())
      if (this.isLast()) return this.go()
      return this.go(this.nextPhoto())
    }

    if (this.isLast()) return this.go(this.firstPhoto())
    this.go(this.nextPhoto())
  }

  previous() {
    if (this.project.statement) {
      if (!this.activeKey()) return this.go(this.lastPhoto())
      if (this.isFirst()) return this.go()
      return this.go(this.previousPhoto())
    }

    if (this.isFirst()) return this.go(this.lastPhoto())
    this.go(this.previousPhoto())
  }
}

const ProjectSlideshow = (props: ProjectSlideshowProps): React.ReactElement => {
  const router = new ProjectRouter(useRouter(), props.project)

  useEffect(() => {
    const keyUpHandler = ({ key }: KeyboardEvent) => {
      switch (key) {
        case Key.LEFT:
          router.previous()
          break
        case Key.RIGHT:
          router.next()
          break
      }
    }

    window.addEventListener('keyup', keyUpHandler)
    return () => window.removeEventListener('keyup', keyUpHandler)
  })

  return (
    <div className={styles.slideshow}>
      <div className={styles.slides} onClick={() => router.next()}>
        {props.project?.statement ? (
          <div className={`${styles.slide} ${router.activeKey() === undefined ? styles.active : ''}`}>
            <h2>{props.project?.title}</h2>
            <ReactMarkdown source={props.project?.statement} />
          </div>
        ) : (
          ''
        )}
        {props.project?.photos.map((photo) => (
          <img
            key={`${props.project.slug}--photo-${photo.key}`}
            className={`${styles.slide} ${router.isActive(photo) ? styles.active : ''}`}
            src={photo.url}
            alt={photo.caption ? photo.caption : photo.key}
          />
        ))}
      </div>
      <div className={styles.navigation}>
        <a className={styles.leftArrow} onClick={() => router.previous()}>
          &larr;
        </a>
        {router.activeKey() ? (
          <h3>
            {router.activeKey()}/{router.countPhotos()}
          </h3>
        ) : (
          ''
        )}
        <a className={styles.rightArrow} onClick={() => router.next()}>
          &rarr;
        </a>
      </div>
      {props.project?.photos
        .filter((photo) => photo.caption)
        .map((photo) => (
          <div
            key={`${props.project.slug}--caption-${photo.key}`}
            className={`${styles.caption} ${router.isActive(photo) ? styles.active : ''}`}
          >
            <ReactMarkdown source={photo.caption} />
          </div>
        ))}
    </div>
  )
}

export default ProjectSlideshow

import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../components/Layout/Layout'
import ProjectSlideshow from '../../components/ProjectSlideshow/ProjectSlideshow'
import { Props } from '../../lib/static'

const Work: React.FC<Props> = ({ projects }): React.ReactElement => {
  const router = useRouter()
  const slug = router?.query?.slug?.length ? router.query.slug[0] : ''
  const project = projects?.find((project) => project.slug === slug)

  return (
    <Layout title={project?.title} projects={projects}>
      <ProjectSlideshow project={project} />
    </Layout>
  )
}

export { getStaticPaths, getStaticProps } from '../../lib/static'

export default Work
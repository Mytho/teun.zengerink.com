import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import SinglePhoto from '../components/SinglePhoto'
import { Project, getProjects } from '../projectService'

const Home = (): React.ReactElement => {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    getProjects().then(setProjects)
  }, [])

  return <Layout projects={projects}>{projects ? <SinglePhoto project={projects[0]} /> : ''}</Layout>
}

export default Home

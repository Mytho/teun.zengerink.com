import React from 'react'
import Layout from '../components/Layout'
import Loader from '../components/Loader'
import SinglePhoto from '../components/SinglePhoto'
import { getProjects, Project } from '../lib/projects'

interface HomeProps {
  projects: Project[]
}

const Home = (props: HomeProps): React.ReactElement => {
  return (
    <Layout projects={props.projects}>
      {props.projects?.length ? <SinglePhoto project={props.projects[0]} /> : <Loader />}
    </Layout>
  )
}

export const getStaticProps = async (): Promise<{ props: HomeProps }> => ({ props: { projects: await getProjects() } })

export default Home

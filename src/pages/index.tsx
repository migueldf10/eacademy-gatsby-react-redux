import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import CourseGridItem from "../components/CourseGridItem"
import locales from "../utils/locales"
import { Container, Hero, Filter } from "../components/Ui"

const IndexPage = props => {
  const { pages } = props.data
  const [filter, set_filter] = useState("")

  return (
    <Layout>
      <SEO title="Home" />
      <Hero.Primary>
        <Hero.Heading>{locales("index.hero.title")}</Hero.Heading>
        <Hero.Body>
          <p>{locales("index.hero.content")}</p>
        </Hero.Body>
        <Hero.Footer>
          <Filter.Container>
            <Filter.Item pressed>All levels</Filter.Item>
            <Filter.Item>Level A1</Filter.Item>
            <Filter.Item>Level A2</Filter.Item>
            <Filter.Item>Level B1</Filter.Item>
          </Filter.Container>
        </Hero.Footer>
      </Hero.Primary>

      <Container>
        <h2>{locales("ui.allCourses")}</h2>
        {pages.edges
          .filter(node => node.node.context.course !== null)
          .map(course => (
            <CourseGridItem
              course={course.node.context.course}
              key={course.node.context.course.id}
            />
          ))}
      </Container>
    </Layout>
  )
}

export default IndexPage

export const shopQuery = graphql`
  {
    pages: allSitePage {
      edges {
        node {
          context {
            course {
              id
              createdAt
              description
              price
              published
              title
              updatedAt
              videoUrl
              lessons {
                description
                id
                priority
                published
                title
                updatedAt
                videoUrl
                createdAt
                courseId
              }
            }
          }
        }
      }
    }
  }
`

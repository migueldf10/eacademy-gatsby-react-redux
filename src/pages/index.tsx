import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import CourseGridItem from "../components/CourseGridItem"
import locales from "../utils/locales"
import { Container } from "../components/Ui"

const IndexPage = props => {
  const { pages } = props.data

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <h1>{locales("index.hero.title")}</h1>
        <p>{locales("index.hero.content")}</p>
      </Container>

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

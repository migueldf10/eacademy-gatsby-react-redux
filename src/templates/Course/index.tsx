import React from "react"
import Layout from "../../components/Layout"
import { CourseContainer } from "./styled"
import VideoEmbed from "../../components/Ui/VideoEmbed"

export default function coursePage(props) {
  const { course } = props.pageContext
  console.log(course)
  return (
    <Layout>
      <CourseContainer>
        <h1>{course.title}</h1>
        <VideoEmbed url={course.videoUrl} />

        <p>{course.videoUrl}</p>
        <p>{course.price}</p>
        <p>State: {course.published ? "Published" : "Draft"}</p>
        <p>{course.description}</p>
      </CourseContainer>
    </Layout>
  )
}

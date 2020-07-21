import React from "react"
import Layout from "../components/Layout"
export default function coursePage(props) {
  const { course } = props.pageContext
  console.log(course)
  return (
    <Layout>
      <h1>{course.title}</h1>
      <p>{course.videoUrl}</p>
      <p>{course.price}</p>
      <p>State: {course.published ? "Published" : "Draft"}</p>
      <p>{course.description}</p>
    </Layout>
  )
}

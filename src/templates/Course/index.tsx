import React from "react"
import Layout from "../../components/Layout"
import { CourseContainer } from "./styled"
import VideoEmbed from "../../components/Ui/VideoEmbed"
import { Button } from "../../components/Ui/Button"
export default function coursePage(props) {
  const { course } = props.pageContext
  const addToCartAction = () => {
    console.log("HEEEY YOU WANT TO BUY!")
  }
  return (
    <Layout>
      <CourseContainer>
        <h1>{course.title}</h1>
        <VideoEmbed url={course.videoUrl} />

        <p>{course.price} Euros</p>
        <p>State: {course.published ? "Published" : "Draft"}</p>
        <p>{course.description}</p>
        <Button onClick={addToCartAction}>Add to cart</Button>
      </CourseContainer>
    </Layout>
  )
}

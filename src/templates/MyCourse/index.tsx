import React from "react"
import Layout from "../../components/Layout"
import { CourseContainer } from "./styled"
import { Button, VideoEmbed } from "../../components/Ui"
import { addToCart } from "../../state/commerce/actions"
import { useDispatch } from "react-redux"

export default function MyCourse(props) {
  // const { course } = props.pageContext
  const dispatch = useDispatch()

  // const addToCartAction = () => {
  //   dispatch(addToCart(course))
  // }

  return (
    <Layout>
      <CourseContainer>
        <p>Hi,! {props.courseId}</p>
        {/* <h1>{course.title}</h1>
        <VideoEmbed url={course.videoUrl} />
        <p>{course.price} Euros</p>
        <p>State: {course.published ? "Published" : "Draft"}</p>
        <p>{course.description}</p>
        <Button onClick={addToCartAction}>Add to cart</Button> */}
      </CourseContainer>
    </Layout>
  )
}

import React, { useEffect } from "react"
import Layout from "../../components/Layout"
import { CourseContainer } from "./styled"
import { useDispatch, useSelector } from "react-redux"
import { setActiveLesson } from "../../state/lesson/actions"
import { getActiveLesson } from "../../state/lesson/selectors"
import LessonGridItem from "../../components/LessonGridItem"

export default function Lesson(props) {
  // const { course } = props.pageContext
  const dispatch = useDispatch()
  const activeLesson = useSelector(getActiveLesson)
  console.log("Active lesson", activeLesson)
  console.log("lesson Id", props.lessonId)
  useEffect(() => {
    dispatch(setActiveLesson(props.lessonId))
  }, [])
  // const addToCartAction = () => {
  //   dispatch(addToCart(course))
  // }

  if (!activeLesson.id) return null

  return (
    <Layout>
      <CourseContainer>
        <p>{activeLesson.title}</p>

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

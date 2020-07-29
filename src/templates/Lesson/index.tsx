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
  const activeLesson = useSelector(getActiveLesson).lesson

  useEffect(() => {
    dispatch(setActiveLesson(props.lessonId))
  }, [])

  if (!activeLesson.id) return null

  return (
    <Layout>
      <CourseContainer>
        <h1>{activeLesson.title}</h1>
      </CourseContainer>
    </Layout>
  )
}

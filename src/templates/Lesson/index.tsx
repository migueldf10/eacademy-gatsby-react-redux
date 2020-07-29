import React, { useEffect } from "react"
import Layout from "../../components/Layout"
import { CourseContainer } from "./styled"
import { useDispatch, useSelector } from "react-redux"
import { setActiveLesson } from "../../state/lesson/actions"
import { getActiveLesson } from "../../state/lesson/selectors"
import LessonGridItem from "../../components/LessonGridItem"

export default function Lesson(props) {
  const dispatch = useDispatch()
  const { lesson, nextLesson, previousLesson } = useSelector(getActiveLesson)

  useEffect(() => {
    dispatch(setActiveLesson(props.lessonId))
  }, [])

  if (!lesson || !lesson.id) return null

  return (
    <Layout>
      <CourseContainer>
        <h1>{lesson.title}</h1>
        {/* {activeLesson} */}
      </CourseContainer>
    </Layout>
  )
}

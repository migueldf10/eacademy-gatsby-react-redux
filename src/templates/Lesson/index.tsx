import React, { useEffect } from "react"
import Layout from "../../components/Layout"
import { CourseContainer } from "./styled"
import { useDispatch, useSelector } from "react-redux"
import {
  setActiveLesson,
  toggleLessonAsTodo,
  toggleLessonAsDone,
} from "../../state/lesson/actions"
import { getActiveLesson } from "../../state/lesson/selectors"
import LessonGridItem from "../../components/LessonGridItem"
import { Link } from "@reach/router"
import { VideoEmbed, Button } from "../../components/Ui"

export default function Lesson(props) {
  const { lessonId } = props
  const dispatch = useDispatch()
  const { lesson, nextLesson, previousLesson } = useSelector(getActiveLesson)

  useEffect(() => {
    dispatch(setActiveLesson(props.lessonId))
  }, [dispatch, lessonId])

  if (!lesson || !lesson.id) return null

  return (
    <Layout>
      <CourseContainer>
        {previousLesson && (
          <Link to={`/lessons/${previousLesson.id}`}>Back</Link>
        )}
        <h1>{lesson.title}</h1>
        <VideoEmbed url={lesson.videoUrl} />
        <div>{lesson.description}</div>
        {/* {activeLesson} */}
        {nextLesson ? (
          <Link to={`/lessons/${nextLesson.id}`}>Next</Link>
        ) : (
          <Link to={`/my-courses/${lesson.courseId}`}>Go to course page</Link>
        )}
        {lesson.completed ? <h3>Done:YES</h3> : <h3>Done:NOT</h3>}
        <Button
          onClick={() => {
            dispatch(toggleLessonAsDone())
          }}
        >
          TOGGLE LESSON as completed
        </Button>

        {lesson.toDo ? (
          <h3>Marked as later:YES</h3>
        ) : (
          <h3>Marked as later:NOT</h3>
        )}
        <Button
          onClick={() => {
            dispatch(toggleLessonAsTodo())
          }}
        >
          TOGGLE LESSON as check later
        </Button>
      </CourseContainer>
    </Layout>
  )
}

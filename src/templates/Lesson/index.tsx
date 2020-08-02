import React, { useEffect } from "react"
import Layout from "../../components/Layout"
import  Styled  from "./styled"
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
import {Hero} from '../../components/Ui'

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
      <Hero.WrapperWithOverlap>
            
        <Styled.ControlBar completed={lesson.completed?true:false}>

        <h1>{lesson.title}</h1>

        {nextLesson ? (
          <Styled.Navigation
            as={Link}
            to={`/lessons/${nextLesson.id}`}
            onClick={() => {
              dispatch(toggleLessonAsDone(lesson.id))
            }}
          >
          Complete & Next ->
        </Styled.Navigation>
          ) : (
            <Link to={`/my-courses/${lesson.courseId}`}>Go to course page</Link>
            )}
        
          </Styled.ControlBar>
      </Hero.WrapperWithOverlap>
      <Styled.Container>

        <VideoEmbed.Youtube url={lesson.videoUrl} />
        {/* {activeLesson} */}
        <div>{lesson.description}</div>


        {lesson.toDo ? (
          <h3>Marked as later:YES</h3>
        ) : (
          <h3>Marked as later:NOT</h3>
        )}
        <Button.PrimaryDefault
          onClick={() => {
            dispatch(toggleLessonAsTodo(lesson.id))
          }}
        >
          TOGGLE LESSON as check later
        </Button.PrimaryDefault>
        <Button.PrimaryDefault
          onClick={() => {
            dispatch(toggleLessonAsDone(lesson.id))
          }}
        >
          TOGGLE LESSON as completed
        </Button.PrimaryDefault>
      </Styled.Container>
    </Layout>
  )
}

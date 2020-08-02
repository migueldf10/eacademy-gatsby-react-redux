import React from "react"
import { Link } from "gatsby"
import { Button } from "../Ui"
import { LessonGridItemContainer } from "./styled"
import { useDispatch } from "react-redux"
import {
  toggleLessonAsTodo,
  toggleLessonAsDone,
} from "../../state/lesson/actions"

export default function LessonGridItem(props) {
  const dispatch = useDispatch()
  const { lesson } = props
  // console.log(lesson)
  return (
    <>
      <LessonGridItemContainer as={Link} to={`/lessons/${lesson.id}`}>
        {lesson.title}
        {lesson.toDo && (
          <div>
            <span>Marked as review later</span>
          </div>
        )}
        {lesson.completed && (
          <div>
            <span>FINISHED</span>
          </div>
        )}
      </LessonGridItemContainer>
      <Button.PrimaryDefault
        onClick={() => dispatch(toggleLessonAsTodo(lesson.id))}
      >
        Toggle TODO
      </Button.PrimaryDefault>
      <Button.PrimaryDefault
        onClick={() => dispatch(toggleLessonAsDone(lesson.id))}
      >
        Toggle As finished
      </Button.PrimaryDefault>
    </>
  )
}

import React from "react"
import { Link } from "gatsby"
import { Button } from "../Ui"
import Styled from "./styled"
import { useDispatch } from "react-redux"
import {
  toggleLessonAsTodo,
  toggleLessonAsDone,
} from "../../state/lesson/actions"

export default function LessonGridItem(props) {
  const dispatch = useDispatch()
  const { lesson, index } = props
  // console.log(lesson)
  return (
    <>
      <Styled.Container>
        <Styled.Title completed={lesson.completed?true:false}>

          <Link to={`/lessons/${lesson.id}`}>
  {index}-{lesson.title}
          </Link>
        </Styled.Title>
        <Styled.Controls>


        
          Review later:<Styled.ToggleIndicator
            pressed={lesson.toDo?true:false}
            onClick={() => dispatch(toggleLessonAsTodo(lesson.id))}
            />
            </Styled.Controls>
      </Styled.Container>
    </>
  )
}

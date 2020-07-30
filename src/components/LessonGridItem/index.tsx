import React from "react"
import { Link } from "gatsby"
import { LessonGridItemContainer } from "./styled"
export default function LessonGridItem(props) {
  const { lesson } = props
  // console.log(lesson)
  return (
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
  )
}

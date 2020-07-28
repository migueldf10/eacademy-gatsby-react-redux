import React from "react"
import { Link } from "gatsby"
export default function LessonGridItem(props) {
  const { lesson } = props
  return <Link to={`/lessons/${lesson.id}`}>{lesson.title}</Link>
}

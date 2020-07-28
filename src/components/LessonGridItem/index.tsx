import React from "react"

export default function LessonGridItem(props) {
  const { lesson } = props
  return <div>{lesson.title}</div>
}

import React from "react"
import { Link, graphql } from "gatsby"
import { CourseGridProps } from "../../models/Course"

type Props = {
  course: CourseGridProps
}
export default function CourseGridItem(props: Props) {
  const { course } = props
  console.log(course)
  return (
    <Link to={`/courses/${course.id}`}>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
    </Link>
  )
}

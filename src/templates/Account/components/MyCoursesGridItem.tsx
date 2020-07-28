import React from "react"
import { MyCoursesGridItemContainer } from "../styled"
import { Link } from "gatsby"
export default function MyCoursesGridItem(props) {
  const { course } = props

  return (
    <MyCoursesGridItemContainer as={Link} to={`/my-courses/${course.id}`}>
      <h3>{course.title}</h3>
    </MyCoursesGridItemContainer>
  )
}

import React from "react"

export default function coursePage(props) {
  const { course } = props.pageContext
  console.log(course)
  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.videoUrl}</p>
      <p>{course.price}</p>
      <p>State: {course.published ? "Published" : "Draft"}</p>
      <p>{course.description}</p>
    </div>
  )
}

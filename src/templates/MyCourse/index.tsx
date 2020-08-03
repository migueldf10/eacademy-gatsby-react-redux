import React, { useEffect } from "react"
import Layout from "../../components/Layout"
import { CourseContainer } from "./styled"
import { useDispatch, useSelector } from "react-redux"
import { setActiveCourse } from "../../state/course/actions"
import { getActiveCourse } from "../../state/course/selectors"
import LessonGridItem from "../../components/LessonGridItem"
import ReactMarkdown from 'react-markdown'
import {VideoEmbed} from '../../components/Ui'

export default function MyCourse(props) {
  // const { course } = props.pageContext
  const dispatch = useDispatch()
  const activeCourse = useSelector(getActiveCourse)
  // console.log("activeCourse", activeCourse)

  
  useEffect(() => {
    dispatch(setActiveCourse(props.courseId))
  }, [])
  // const addToCartAction = () => {
  //   dispatch(addToCart(course))
  // }

  if (!activeCourse.id) return null

  return (
    <Layout template={'course'}>
      <CourseContainer>

        <h1>{activeCourse.title}</h1>
        {activeCourse.lessons.map((lesson,index) => (
          <LessonGridItem lesson={lesson} index={index} key={lesson.id} />
        ))}
        <ReactMarkdown
                    source={activeCourse.description}
                    escapeHtml={false}
                />
          <span>Price:{activeCourse.price}</span>
          <VideoEmbed.Youtube url={activeCourse.videoUrl}/>

        
        {/* <h1>{course.title}</h1>
        <VideoEmbed url={course.videoUrl} />
        <p>{course.price} Euros</p>
        <p>State: {course.published ? "Published" : "Draft"}</p>
        <p>{course.description}</p>
        <Button onClick={addToCartAction}>Add to cart</Button> */}
      </CourseContainer>
    </Layout>
  )
}

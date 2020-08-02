import React from "react"
import Layout from "../../components/Layout"
import Styled from "./styled"
import { Button, VideoEmbed } from "../../components/Ui"
import { addToCart } from "../../state/commerce/actions"
import { useDispatch, useSelector } from "react-redux"
import { Hero } from "../../components/Ui"
import locales from "../../utils/locales"
import { getCourses } from "../../state/session/selectors"
import { Link } from "@reach/router"

export default function coursePage(props) {
  const { course } = props.pageContext
  const dispatch = useDispatch()
  const courses = useSelector(getCourses)

  const addToCartAction = () => {
    dispatch(addToCart(course))
  }

  const courseIds = courses.map(course => course.id)
  const alreadyBought = courseIds.includes(course.id)
  console.log(alreadyBought)
  return (
    <Layout>
      <Hero.WrapperWithOverlap>
        <Hero.Overline center>
          {locales("onlineCourses.overline")}
        </Hero.Overline>
        <Hero.Heading center>{course.title}</Hero.Heading>
      </Hero.WrapperWithOverlap>
      <Styled.Container>
        <Styled.IntroFrame>
          <VideoEmbed.Youtube url={course.videoUrl} />
        </Styled.IntroFrame>
        <p>{course.price} Euros</p>
        {/* <p>State: {course.published ? "Published" : "Draft"}</p> */}
        <p>{course.description}</p>
        {!alreadyBought ? (
          <Button.ContrastPrimary onClick={addToCartAction}>
            {locales("cart.addToCart")}
          </Button.ContrastPrimary>
        ) : (
          <>
            <span>You already own this course!</span>
            <br />
            <Button.ContrastPrimary as={Link} to={`/my-courses/${course.id}`}>
              View the course page
            </Button.ContrastPrimary>
          </>
        )}
      </Styled.Container>
    </Layout>
  )
}

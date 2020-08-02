import React from "react"
import Layout from "../../components/Layout"
import Styled from "./styled"
import { Button, VideoEmbed } from "../../components/Ui"
import { addToCart } from "../../state/commerce/actions"
import { useDispatch } from "react-redux"
import { Hero } from "../../components/Ui"
import locales from "../../utils/locales"

export default function coursePage(props) {
  const { course } = props.pageContext
  const dispatch = useDispatch()

  const addToCartAction = () => {
    dispatch(addToCart(course))
  }

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
        <p>State: {course.published ? "Published" : "Draft"}</p>
        <p>{course.description}</p>
        <Button.ContrastPrimary onClick={addToCartAction}>
          {locales("cart.addToCart")}
        </Button.ContrastPrimary>
      </Styled.Container>
    </Layout>
  )
}

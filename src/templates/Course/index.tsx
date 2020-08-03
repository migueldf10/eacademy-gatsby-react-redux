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
import ReactMarkdown from "react-markdown"

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
        <ReactMarkdown source={course.description} escapeHtml={false} />
        {!alreadyBought ? (
          <Button.ContrastDefault onClick={addToCartAction}>
            <span>{locales("cart.addToCart")}</span>
          </Button.ContrastDefault>
        ) : (
          <div>
            <div>You already own this course!</div>
            <Button.ContrastDefault as={Link} to={`/my-courses/${course.id}`}>
              <span>View the course page</span>
            </Button.ContrastDefault>
          </div>
        )}
      </Styled.Container>
    </Layout>
  )
}

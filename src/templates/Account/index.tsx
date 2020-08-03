import React, { useEffect } from "react"
import Layout from "../../components/Layout"
import { Container, Button } from "../../components/Ui"
import { Router, RouteComponentProps } from "@reach/router"
import { Link } from "gatsby"
import { login, logout, isAuthenticated, getProfile } from "../../utils/auth"
import { UserType } from "../../models/User"
import { useDispatch, useSelector } from "react-redux"
import { setSession } from "../../state/session/actions"
import { getUser, getCourses } from "../../state/session/selectors"
import MyCoursesGridItem from "./components/MyCoursesGridItem"

const AccountTemplate = () => {
  const dispatch = useDispatch()

  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }
  const userInLocal = useSelector(getUser)
  if (!userInLocal.sub) {
    dispatch(setSession())
  }

  const user = getProfile()

  const courses = useSelector(getCourses)

  return (
    <Layout template={"account"}>
      <Container>
        <h2>My courses</h2>
        {courses.length > 0 ? (
          courses.map(course => (
            <MyCoursesGridItem
              key={course.id}
              course={course}
            ></MyCoursesGridItem>
          ))
        ) : (
          <Link to="/">Buy some courses to start working!</Link>
        )}
      </Container>
      <Container>
        <Button.PrimaryDefault onClick={logout}>Log out</Button.PrimaryDefault>
      </Container>
    </Layout>
  )
}

export default AccountTemplate

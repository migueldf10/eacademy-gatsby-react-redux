import React, { useEffect } from "react"
import Layout from "../../components/Layout"
import { Container } from "../../components/Ui"
import { Router, RouteComponentProps } from "@reach/router"
import { Link } from "gatsby"
import { login, logout, isAuthenticated, getProfile } from "../../utils/auth"
import { UserType } from "../../models/User"
import { useDispatch, useSelector } from "react-redux"
import { setSession } from "../../state/session/actions"
import { getUser, getCourses } from "../../state/session/selectors"

const AccountTemplate = () => {
  const dispatch = useDispatch()

  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }
  const userInLocal = useSelector(getUser)
  console.log(userInLocal)
  if (!userInLocal.sub) {
    dispatch(setSession())
  }

  const user = getProfile()

  const courses = useSelector(getCourses)

  return (
    <Layout>
      <Container>
        <h3>My courses</h3>
        {courses.length > 0 ? (
          courses.map(course => <span>{course.title}</span>)
        ) : (
          <Link to="/">Buy some courses to start working!</Link>
        )}
      </Container>
    </Layout>
  )
}

export default AccountTemplate

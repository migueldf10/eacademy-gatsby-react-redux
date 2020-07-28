import React, { useEffect } from "react"
import Layout from "../components/Layout"
import { Container } from "../components/Ui"
import { Router, RouteComponentProps } from "@reach/router"
import { Link } from "gatsby"
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"
import { UserType } from "../models/User"
import { useDispatch, useSelector } from "react-redux"
import { setSession } from "../state/session/actions"
import { getUser } from "../state/session/selectors"

interface componentProps extends RouteComponentProps {
  user: UserType
}

const Course = (props: any) => {
  return <p>Hi,! {props.courseId}</p>
}

const MyCoursesComponent = () => {
  const dispatch = useDispatch()

  // if (!isAuthenticated()) {
  //   login()
  //   return <p>Redirecting to login...</p>
  // }
  // const userInLocal = useSelector(getUser)
  // console.log(userInLocal.sub)
  // if (!userInLocal.sub) {
  //   dispatch(setSession())
  // }

  const user = getProfile()

  return (
    <Layout>
      <Container>
        <Router>
          <Course path="/my-courses/:courseId" />
        </Router>
        <h1>MY courses</h1>
      </Container>
    </Layout>
  )
}

export default MyCoursesComponent

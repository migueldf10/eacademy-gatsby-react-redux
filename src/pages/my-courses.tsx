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
import MyCourse from "../templates/MyCourse"

interface componentProps extends RouteComponentProps {
  user: UserType
}

const Course = (props: any) => {
  return <p>Hi,! {props.courseId}</p>
}

const MyCoursesComponent = () => {
  return (
    <Router>
      <MyCourse path="/my-courses/:courseId" />
    </Router>
  )
}

export default MyCoursesComponent

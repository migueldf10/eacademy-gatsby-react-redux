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

const Home = (props: componentProps) => {
  const user = props.user

  return <p>Hi, {user.name ? user.name : "friend"}!</p>
}

const Settings = (props: RouteComponentProps) => <p>Settings</p>
const Billing = (props: RouteComponentProps) => <p>Billing</p>

const Account = () => {
  const dispatch = useDispatch()

  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }
  const userInLocal = useSelector(getUser)
  console.log(userInLocal.sub)
  if (!userInLocal.sub) {
    dispatch(setSession())
  }

  const user = getProfile()

  return (
    <Layout>
      <Container>
        <p>This is going to be a protected route.</p>
        <nav>
          <Link to="/account">Home</Link>{" "}
          <Link to="/account/settings">Settings</Link>{" "}
          <Link to="/account/billing">Billing</Link>{" "}
          <a
            href="#logout"
            onClick={e => {
              logout()
              e.preventDefault()
            }}
          >
            Log Out
          </a>
        </nav>
        <Router>
          <Home path="/account" user={user} />
          <Settings path="/account/settings" />
          <Billing path="/account/billing" />
        </Router>
      </Container>
    </Layout>
  )
}

export default Account

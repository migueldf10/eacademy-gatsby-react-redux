import React, { useEffect } from "react"
import Layout from "../components/Layout"
import { Container } from "../components/Ui/Container"
import { Router, RouteComponentProps } from "@reach/router"
import { Link } from "gatsby"
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"
import { UserType } from "../models/User"
import { useDispatch } from "react-redux"
import { setUserSession } from "../state/session/actions"

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
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }
  const user = getProfile()
  const dispatch = useDispatch()

  useEffect(() => {}, [])

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

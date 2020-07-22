import React from "react"
import Layout from "../components/Layout"
import { Container } from "../components/Ui/Container"
import { Router, RouteComponentProps } from "@reach/router"
import { Link } from "gatsby"

const Home = (props: RouteComponentProps) => <p>Home</p>
const Settings = (props: RouteComponentProps) => <p>Settings</p>
const Billing = (props: RouteComponentProps) => <p>Billing</p>

const Account = () => (
  <Layout>
    <Container>
      <p>This is going to be a protected route.</p>
      <nav>
        <Link to="/account">Home</Link>{" "}
        <Link to="/account/settings">Settings</Link>{" "}
        <Link to="/account/billing">Billing</Link>{" "}
      </nav>
      <Router>
        <Home path="/account" />
        <Settings path="/account/settings" />
        <Billing path="/account/billing" />
      </Router>
    </Container>
  </Layout>
)

export default Account

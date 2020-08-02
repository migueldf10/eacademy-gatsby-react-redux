import React from "react"
import { useSelector } from "react-redux"
import { isAdmin } from "../../state/session/selectors"
import { Container } from "./styled"
import { Button } from "../Ui"

export default function AdminBar() {
  const admin = useSelector(isAdmin)
  return <Container>{admin ? <Button>EDIT</Button> : null}</Container>
}

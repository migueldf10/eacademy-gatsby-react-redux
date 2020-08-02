import React from "react"
import { useSelector } from "react-redux"
import { isAdmin } from "../../state/session/selectors"
import Styled from "./styled"
import { Button } from "../Ui"

export default function AdminBar() {
  const admin = useSelector(isAdmin)

  if (!admin) return null
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <h3 style={{ margin: "0px" }}>This is the admin bar</h3>
        <Button>EDIT</Button>
      </Styled.Container>
    </Styled.Wrapper>
  )
}

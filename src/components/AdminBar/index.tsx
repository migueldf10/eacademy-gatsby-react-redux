import React, { useState } from "react"
import { useSelector } from "react-redux"
import { isAdmin } from "../../state/session/selectors"
import Styled from "./styled"
import { Button } from "../Ui"
import EditCourse from "./components/EditCourse"
import CreateCourse from "./components/CreateCourse"

function Editor(props) {
  const { template } = props

  switch (template) {
    case "course":
      return <EditCourse />
    case "account":
      return <CreateCourse />
  }
}

export default function AdminBar(props) {
  const { template } = props
  const [showEditor, set_showEditor] = useState(false)
  const admin = useSelector(isAdmin)

  if (!admin) return null
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <h3 style={{ margin: "0px" }}>This is the admin bar</h3>
        <Button.PrimaryDefault onClick={() => set_showEditor(!showEditor)}>
          {showEditor ? "Discard" : "Edit"}
        </Button.PrimaryDefault>
      </Styled.Container>
      {showEditor && <Editor template={template} />}
    </Styled.Wrapper>
  )
}

import React from "react"
import { handleAuthentication } from "../utils/auth"
import { useDispatch } from "react-redux"
import { setSession } from "../state/session/actions"

const Callback = () => {
  const dispatch = useDispatch()

  const handleCheckSection = () => {
    dispatch(setSession())
  }

  handleAuthentication(handleCheckSection)

  return <p>Loading...</p>
}

export default Callback

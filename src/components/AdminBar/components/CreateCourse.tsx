import React, { useState } from "react"
import Button from "../../Ui/Button"
import Styled from "../styled"
import { useSelector, useDispatch } from "react-redux"
import { createCourse } from "../../../state/course/actions"
import ReactMarkdown from "react-markdown"
import { Form } from "../../Ui"

export default function CreateCourse(props) {
  const [title, set_title] = useState("")
  const [price, set_price] = useState("")
  const [videoUrl, set_videoUrl] = useState("")
  const [description, set_description] = useState("")

  const dispatch = useDispatch()

  const submitForm = event => {
    event.preventDefault()
    const newCourse = {
      title,
      price,
      videoUrl,
      description,
    }
    dispatch(createCourse(newCourse))
  }

  return (
    <Styled.Editor>
      <div>
        <form onSubmit={event => submitForm(event)}>
          <label htmlFor="title">Title:</label>
          <input
            onChange={e => set_title(e.target.value)}
            value={title}
            id="title"
          />
          <label htmlFor="price">Price:</label>
          <input
            onChange={e => set_price(e.target.value)}
            value={price}
            id="price"
          />
          <label htmlFor="videoUrl">Video Url:</label>
          <input
            onChange={e => set_videoUrl(e.target.value)}
            id="videoUrl"
            value={videoUrl}
          />
          <label htmlFor="description">Description:</label>
          <Form.Textarea
            onChange={e => set_description(e.target.value)}
            id="description"
            value={description}
          ></Form.Textarea>
          <Button.PrimaryPrimary type="submit" style={{ marginTop: "32px" }}>
            Submit
          </Button.PrimaryPrimary>
        </form>
      </div>

      <div>
        Preview
        <br />
        <span>Title:</span>
        <h1 style={{ margin: "0px" }}>{title}</h1>
        <br />
        Description:
        <br />
        <ReactMarkdown source={description} escapeHtml={false} />
        <br />
        <span>Price:{price}</span>
        <br />
        <span>Video Url:</span>
        <br />
        <span>{videoUrl}</span>
      </div>
    </Styled.Editor>
  )
}

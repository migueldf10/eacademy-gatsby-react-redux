import React, { useState } from "react"
import Button from "../../Ui/Button"
import Styled from "../styled"
import { useSelector, useDispatch } from "react-redux"
import { getActiveLesson } from "../../../state/lesson/selectors"
import { updateLesson } from "../../../state/lesson/actions"
import ReactMarkdown from "react-markdown"
import { Form } from "../../Ui"

export default function EditLesson(props) {
  const dispatch = useDispatch()
  const activeLesson = useSelector(getActiveLesson).lesson
  const [title, set_title] = useState(activeLesson.title)
  const [videoUrl, set_videoUrl] = useState(activeLesson.videoUrl)
  const [description, set_description] = useState(activeLesson.description)

  const submitLessonUpdate = event => {
    event.preventDefault()
    const updatedLesson = {
      title,
      videoUrl,
      description,
      courseId: activeLesson.courseId,
      id: activeLesson.id,
    }
    dispatch(updateLesson(updatedLesson))
  }

  return (
    <Styled.Editor>
      <div>
        <form onSubmit={event => submitLessonUpdate(event)}>
          <label htmlFor="title">Title:</label>
          <input
            onChange={e => set_title(e.target.value)}
            value={title}
            id="title"
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
        <h1>Title: {title}</h1>
        Description:
        <ReactMarkdown source={description} escapeHtml={false} />
        <span>Video Url:{videoUrl}</span>
      </div>
    </Styled.Editor>
  )
}

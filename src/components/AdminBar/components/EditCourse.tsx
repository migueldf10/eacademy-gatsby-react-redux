import React, { useState } from 'react'
import Button from '../../Ui/Button'
import Styled from '../styled'
import { useSelector, useDispatch } from 'react-redux'
import { getActiveCourse } from '../../../state/course/selectors'
import { updateCourse } from '../../../state/course/actions'
import ReactMarkdown from 'react-markdown'
import {Form} from '../../Ui'

export default function EditCourse(props) {

    const activeCourse = useSelector(getActiveCourse)
    const [title, set_title] = useState(activeCourse.title)
    const [price, set_price] = useState(activeCourse.price)
    const [videoUrl, set_videoUrl] = useState(activeCourse.videoUrl)
    const [description, set_description] = useState(activeCourse.description)

    const [lessonTitle, set_lessonTitle] = useState("")

    const dispatch = useDispatch()

    const submitForm = (event) => {
        event.preventDefault()
        const newCourse = {
            title,
            price,
            videoUrl,
            description,
            id: activeCourse.id
        }
        dispatch(updateCourse(newCourse))
        console.log()

    }
    const createLesson = (event) => {
        event.preventDefault()
        const newCourse = {
            title,
            price,
            videoUrl,
            description,
            id: activeCourse.id
        }
        dispatch(updateCourse(newCourse))
        console.log()

    }
    return (
        <Styled.Editor>
            <div>


            <form onSubmit={(e)=>submitForm(e)}>
                <label htmlFor='title'>Title:</label>
                <input onChange={e => set_title(e.target.value)} value={title} id='title' />
                <label htmlFor='price'>Price:</label>
                <input onChange={e => set_price(e.target.value)} value={price} id='price' />
                <label htmlFor='videoUrl'>Video Url:</label>
                <input onChange={e => set_videoUrl(e.target.value)} id='videoUrl' value={videoUrl}/>
                <label htmlFor='description'>Description:</label>
                <Form.Textarea onChange={e => set_description(e.target.value)} id='description'value={description}></Form.Textarea >
                <Button.PrimaryPrimary type='submit' style={{marginTop:'32px'}}>Submit</Button.PrimaryPrimary>
            </form>

            <form onSubmit={(e)=>createLesson(e)}>
                <label htmlFor='lessonTitle'>New lesson title:</label>
                <input onChange={e => set_lessonTitle(e.target.value)} value={lessonTitle} id='lessonTitle' />
                <Button.PrimaryPrimary type='submit' style={{marginTop:'32px'}}>Submit</Button.PrimaryPrimary>

            </form>
            </div>

            <div>
                <h1>Title: {title}</h1>
            Description:
            <ReactMarkdown
                    source={description}
                    escapeHtml={false}
                />
                <span>Price:{price}</span>
                <span>Video Url:{videoUrl}</span>
            </div>
        </Styled.Editor>
    )
}

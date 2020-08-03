import { START_SESSION, END_SESSION, FILL_PROFILE } from "./actions"
import {
  MAKE_LESSON_AS_TODO,
  REMOVE_LESSON_AS_TODO,
  MAKE_LESSON_AS_DONE,
  REMOVE_LESSON_AS_DONE,
} from "../lesson/actions"
import{
  UPDATE_COURSE
} from "../course/actions"


const initialState = {
  user: {},
  tokens: {},
  courses: [],
  todoLessons: [],
  completedLessons: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case START_SESSION:
      return { ...payload }
    case FILL_PROFILE:
      return { ...state }
    case UPDATE_COURSE:
      return {...state,courses:state.courses.map(course=>{
        if(course.id===payload.id)return payload
        return course
      })}

    case MAKE_LESSON_AS_TODO:
      return { ...state, todoLessons: [...state.todoLessons, payload.lessonId] }
    case REMOVE_LESSON_AS_TODO:
      const newTodoArray = state.todoLessons.filter(
        lessonId => lessonId !== payload
      )

      return { ...state, todoLessons: newTodoArray }
    case MAKE_LESSON_AS_DONE:
      return {
        ...state,
        completedLessons: [...state.completedLessons, payload.lessonId],
      }
    case REMOVE_LESSON_AS_DONE:
      const newCompletedArray = state.completedLessons.filter(
        lessonId => lessonId !== payload
      )

      return { ...state, completedLessons: newCompletedArray }
    case END_SESSION:
      return {}

    default:
      return state
  }
}

import { START_SESSION, END_SESSION, FILL_PROFILE } from "./actions"
import { MAKE_LESSON_AS_TODO, REMOVE_LESSON_AS_TODO } from "../lesson/actions"
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
      console.log(payload)
      return { ...state }

    case MAKE_LESSON_AS_TODO:
      return { ...state, todoLessons: [...state.todoLessons, payload.lessonId] }
    case REMOVE_LESSON_AS_TODO:
      console.log("array of todos", state.todoLessons)
      console.log("Removing from the array the id", payload)
      const newTodoArray = state.todoLessons.filter(
        lessonId => lessonId !== payload
      )

      return { ...state, todoLessons: newTodoArray }
    case END_SESSION:
      return {}

    default:
      return state
  }
}

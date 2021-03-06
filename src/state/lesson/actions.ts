import buildAxios from "../../utils/api"
import { setActiveCourse } from "../course/actions"

export const SET_ACTIVE_LESSON = "SET_ACTIVE_LESSON"
export const MAKE_LESSON_AS_TODO = "MAKE_LESSON_AS_TODO"
export const REMOVE_LESSON_AS_TODO = "REMOVE_LESSON_AS_TODO"
export const MAKE_LESSON_AS_DONE = "MAKE_LESSON_AS_DONE"
export const REMOVE_LESSON_AS_DONE = "REMOVE_LESSON_AS_DONE"

export const setActiveLesson = lessonId => {
  console.log("setting the lesson with id active", lessonId)
  return async (dispatch, getState) => {
    const response = await buildAxios(getState().session.tokens.idToken).get(
      `/lessons/${lessonId}`
    )
    dispatch({
      type: SET_ACTIVE_LESSON,
      payload: response.data,
    })
  }
}

export const createLesson = lesson => {
  return async (dispatch, getState) => {
    const response = await buildAxios(getState().session.tokens.idToken).post(
      `/lessons`,
      lesson
    )
    console.log(response.data)
    dispatch(setActiveCourse(response.data.courseId))
  }
}

export const updateLesson = lesson => {
  return async (dispatch, getState) => {
    const response = await buildAxios(getState().session.tokens.idToken).put(
      `/lessons/${lesson.id}`,
      lesson
    )
    console.log("DATA RETURNED BY BACKEND", response.data)
    dispatch(setActiveLesson(response.data.id))
  }
}

export const toggleLessonAsTodo = lessonId => {
  return async (dispatch, getState) => {
    const { todoLessons } = getState().session
    if (todoLessons) {
      const setTodoLessonAs = todoLessons.includes(lessonId) ? false : true
      const response = await buildAxios(getState().session.tokens.idToken).put(
        `/actions/toggleLessonAsTodo/${lessonId}`,
        {
          set: setTodoLessonAs,
        }
      )

      if (setTodoLessonAs === true) {
        dispatch({
          type: MAKE_LESSON_AS_TODO,
          payload: response.data,
        })
      } else {
        dispatch({
          type: REMOVE_LESSON_AS_TODO,
          payload: lessonId,
        })
      }
    }
  }
}

export const toggleLessonAsDone = lessonId => {
  return async (dispatch, getState) => {
    const { completedLessons } = getState().session

    if (completedLessons) {
      const setCompletedLessonAs = completedLessons.includes(lessonId)
        ? false
        : true
      const response = await buildAxios(getState().session.tokens.idToken).put(
        `/actions/toggleLessonAsDone/${lessonId}`,
        {
          set: setCompletedLessonAs,
        }
      )

      if (setCompletedLessonAs === true) {
        dispatch({
          type: MAKE_LESSON_AS_DONE,
          payload: response.data,
        })
      } else {
        dispatch({
          type: REMOVE_LESSON_AS_DONE,
          payload: lessonId,
        })
      }
    }
  }
}

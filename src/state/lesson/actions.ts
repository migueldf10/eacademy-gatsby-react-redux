import buildAxios from "../../utils/api"
export const SET_ACTIVE_LESSON = "SET_ACTIVE_LESSON"
export const MAKE_LESSON_AS_TODO = "MAKE_LESSON_AS_TODO"
export const REMOVE_LESSON_AS_TODO = "REMOVE_LESSON_AS_TODO"

export const setActiveLesson = lessonId => {
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
export const toggleLessonAsTodo = () => {
  return async (dispatch, getState) => {
    const todoLessons = getState().session.todoLessons
    const lesson = getState().lesson
    if (todoLessons && todoLessons.length > 0) {
      const setTodoLessonAs = todoLessons.includes(lesson.id) ? false : true
      const response = await buildAxios(getState().session.tokens.idToken).put(
        `/actions/toggleLessonAsTodo/${lesson.id}`,
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
          payload: lesson.id,
        })
      }
    }
  }
}

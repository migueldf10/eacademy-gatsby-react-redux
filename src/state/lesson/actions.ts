import buildAxios from "../../utils/api"
export const SET_ACTIVE_LESSON = "SET_ACTIVE_LESSON"

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

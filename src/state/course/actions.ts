import buildAxios from "../../utils/api"

export const SET_ACTIVE_COURSE = "SET_ACTIVE_COURSE"

export const setActiveCourse = courseId => {
  return async (dispatch, getState) => {
    const response = await buildAxios(getState().session.tokens.idToken).get(
      `/myCourses/${courseId}`
    )
    dispatch({
      type: SET_ACTIVE_COURSE,
      payload: response.data,
    })
  }
}

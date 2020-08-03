import buildAxios from "../../utils/api"
export const SET_ACTIVE_COURSE = "SET_ACTIVE_COURSE"
export const UPDATE_COURSE = "UPDATE_COURSE"

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


export const updateCourse = course => {
  return async (dispatch, getState) => {
    try{

      const response = await buildAxios(getState().session.tokens.idToken).put(
        `/course/${course.id}`,course
        )
        console.log(response.data)
        dispatch(setActiveCourse(response.data.id))
        dispatch({
          type:UPDATE_COURSE,
          payload: response.data
        })
      } catch (e) {
        console.log('error',e)
      }
  }
}

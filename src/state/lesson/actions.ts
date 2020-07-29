import buildAxios from "../../utils/api"
export const SET_ACTIVE_LESSON = "SET_ACTIVE_LESSON"

export const setActiveLesson = lessonId => {
  return async (dispatch, getState) => {
    if (!getState().course.lessons) return null
    const currentLesson = getState().course.lessons.find(lesson => {
      console.log("finding lesson with id", lessonId)
      console.log("now checking lesson with id", lesson.id)
      return parseInt(lesson.id) === parseInt(lessonId)
    })
    console.log("current lesson", currentLesson)
    // const response = await buildAxios(getState().session.tokens.idToken).get(
    //   `/myCourses/${courseId}`
    // )
    dispatch({
      type: SET_ACTIVE_LESSON,
      payload: currentLesson,
    })
  }
}

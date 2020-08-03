import buildAxios from "../../utils/api"
import { getProfile, getToken } from "../../utils/auth"
export const START_SESSION = "START_SESSION"
export const FILL_PROFILE = "FILL_PROFILE"
export const END_SESSION = "END_SESSION"

export const setSession = () => {
  const user = getProfile()
  const tokens = getToken()
  console.log("fetching a session now")
  console.log("user", user)
  console.log("tokens", tokens)
  if (tokens && tokens.idToken && user) {
    return async (dispatch, getState) => {
      try {
        const response = await buildAxios(tokens.idToken).get(`/users`)
        dispatch({
          type: START_SESSION,
          payload: {
            user,
            tokens,
            courses: response.data.courses,
            todoLessons:
              response.data.todoLessons.length > 0
                ? response.data.todoLessons.map(
                    todoLesson => todoLesson.lessonId
                  )
                : [],
            completedLessons:
              response.data.completedLessons.length > 0
                ? response.data.completedLessons.map(lesson => lesson.lessonId)
                : [],
          },
        })
        // console.log(response.data)
      } catch (e) {
        console.log("error", e)
      }
    }
  } else {
    return async (dispatch, getState) => {
      try {
      } catch (e) {
        console.log("error", e)
      }
    }
  }
}

export const endSession = user => {
  return {
    type: END_SESSION,
    payload: user,
  }
}

export const fillProfile = () => {}

export const START_USER_SESSION = "START_USER_SESSION"
export const END_USER_SESSION = "END_USER_SESSION"

export const setUserSession = user => {
  return {
    type: START_USER_SESSION,
    payload: user,
  }
}
export const endUserSession = user => {
  return {
    type: END_USER_SESSION,
    payload: user,
  }
}

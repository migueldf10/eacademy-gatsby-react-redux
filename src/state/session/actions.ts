export const START_SESSION = "START_SESSION"
export const END_SESSION = "END_SESSION"

export const setSession = (user, tokens) => {
  return {
    type: START_SESSION,
    payload: { user, tokens },
  }
}

export const endSession = user => {
  return {
    type: END_SESSION,
    payload: user,
  }
}

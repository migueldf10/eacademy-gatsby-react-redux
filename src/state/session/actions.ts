import axios from "axios"

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

export const testAuth = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get("http://localhost:4000/authorized", {
        headers: {
          Authorization: "Bearer " + getState().session.tokens.idToken,
        },
      })
      console.log(response.data)
    } catch (e) {
      console.log("error", e)
    }
    const result = await fetch("https://exampleco.com/api", {
      method: "GET",
      headers: {},
    })
    const data = await result.json()
    console.log(data)
  }
}

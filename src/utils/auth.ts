// src/utils/auth.js
import auth0 from "auth0-js"
import { navigate } from "gatsby"

const isBrowser = typeof window !== "undefined"

const auth: any = isBrowser
  ? new auth0.WebAuth({
      domain: process.env.GATSBY_AUTH0_DOMAIN,
      clientID: process.env.GATSBY_AUTH0_CLIENTID,
      redirectUri: process.env.GATSBY_AUTH0_CALLBACK,
      audience: process.env.GATSBY_AUTH0_AUDIENCE,
      responseType: "token id_token",
      scope: "openid profile email",
    })
  : {}

const tokens: any = {
  accessToken: false,
  idToken: false,
  expiresAt: false,
}

let user = {}

export const isAuthenticated = () => {
  if (!isBrowser) {
    return
  }

  return localStorage.getItem("isLoggedIn") === "true"
}

export const login = () => {
  if (!isBrowser) {
    return
  }
  localStorage.setItem(
    "session",
    JSON.stringify({
      location: window.location.href,
      redirect: true,
      cart: "cart",
    })
  )

  auth.authorize()
}

const setSession = (cb = () => {}) => (err, authResult) => {
  if (err) {
    navigate("/")
    cb()
    return
  }

  if (authResult && authResult.accessToken && authResult.idToken) {
    let expiresAt = authResult.expiresIn * 1000 + new Date().getTime()
    tokens.accessToken = authResult.accessToken
    tokens.idToken = authResult.idToken
    tokens.expiresAt = expiresAt
    user = authResult.idTokenPayload
    localStorage.setItem("isLoggedIn", "true")
    const previousSession = JSON.parse(localStorage.getItem("session"))
    if (previousSession && previousSession.redirect) {
      navigate(previousSession.location)
      localStorage.removeItem("session")
    }
    cb()
  }
}

export const handleAuthentication = callback => {
  if (!isBrowser) {
    return
  }

  auth.parseHash(setSession(callback))
}

export const getProfile = () => {
  return user
}
export const getToken = () => {
  return tokens
}

export const silentAuth = callback => {
  if (!isAuthenticated()) return callback()

  auth.checkSession({}, setSession(callback))
}

export const logout = () => {
  localStorage.setItem("isLoggedIn", "false")
  localStorage.removeItem("session")
  auth.logout({ returnTo: process.env.GATSBY_AUTH0_LOGOUT_URL })
}

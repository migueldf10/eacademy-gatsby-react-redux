import React, { useState, useEffect } from "react"
import { silentAuth } from "./src/utils/auth"
import { Provider } from "react-redux"
import createStore from "./src/state/createStore"
import { useDispatch } from "react-redux"
import { setSession } from "./src/state/session/actions"

const SessionCheck = props => {
  const [loading, set_loading] = useState(true)
  const dispatch = useDispatch()
  const handleCheckSection = () => {
    set_loading(false)
    dispatch(setSession())
  }

  useEffect(() => {
    silentAuth(handleCheckSection)
  }, [])

  return loading === false && <React.Fragment>{props.children}</React.Fragment>
}

export default ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const store = createStore()

  return (
    <Provider store={store}>
      <SessionCheck>{element}</SessionCheck>
    </Provider>
  )
}

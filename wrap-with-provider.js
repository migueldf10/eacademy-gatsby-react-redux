import React from "react"
import { silentAuth } from "./src/utils/auth"
import { Provider } from "react-redux"

import createStore from "./src/state/createStore"

class SessionCheck extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  handleCheckSession = () => {
    this.setState({ loading: false })
  }

  componentDidMount() {
    silentAuth(this.handleCheckSession)
  }

  render() {
    console.log('rendering session check')
    return (
      this.state.loading === false && (
        <React.Fragment>{this.props.children}</React.Fragment>
      )
    )
  }
}




export default ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const store = createStore()

  return <Provider store={store}>
    <SessionCheck>
      {element}
    </SessionCheck>
  </Provider>
}

import React from "react"
import {lifecycle} from "recompose"
import {Provider} from "react-redux"
import {createStore} from "redux"
import {injectGlobal} from "styled-components"

// inject global css style
const enhance = lifecycle({
	componentWillMount() {
		injectGlobal`
      body {
        margin: 0;
      }
      * {
        box-sizing: border-box;
      }
    `
	},
})

// fake store change this later
const store = createStore((state = {}, action) => state)

const App = (Component) =>
	enhance((props) => (
		<Provider store={store}>
			<Component {...props} />
		</Provider>
	))

export default App

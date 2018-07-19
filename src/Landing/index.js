import React, {Component} from "react"
import {compose, withProps} from "recompose"
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"

import {mapAPIKey} from "../common/config"
import App from "../common/App"

const MyMapComponent = compose(
	withProps({
		googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${mapAPIKey}&v=3.exp&libraries=geometry,drawing,places`,
		loadingElement: <div style={{height: `100vh`}} />,
		containerElement: <div style={{height: `100vh`}} />,
		mapElement: <div style={{height: `100vh`}} />,
	}),
	withScriptjs,
	withGoogleMap,
)((props) => (
	<GoogleMap {...props}>
		{props.isMarkerShown && (
			<Marker
				position={{lat: -34.397, lng: 150.644}}
				onClick={props.onMarkerClick}
			/>
		)}
	</GoogleMap>
))

class LandingPage extends Component {
	state = {
		lat: -34.397,
	}

	componentDidMount() {
		setTimeout(() => {
			alert("update")
			this.setState({lat: -30.397})
		}, 5000)
	}

	render() {
		return (
			<div>
				<MyMapComponent
					defaultZoom={8}
					center={{lat: this.state.lat, lng: 150.644}}
					defaultCenter={{lat: this.state.lat, lng: 150.644}}
				/>
			</div>
		)
	}
}

export default App(LandingPage)

import React, {Component} from "react"
import {compose, withProps} from "recompose"
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"

import projectMain from "../assets/projectMain"
import MapPin from "../components/MapPin"
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
		<MapPin position={{lat: 62.400471, lng: -150.005608}} />
		{/* {projectMain.map((project, i) => {
			return <MapPin key={`project_${i}`} position={{lat: project.lat, lng: project.lon}} />
		})} */}
	</GoogleMap>
))

class LandingPage extends Component {
	state = {
		lat: -34.397,
	}

	render() {
		return (
			<div>
				<MyMapComponent
					defaultZoom={8}
					defaultCenter={{lat: 62.400471, lng: -150.005608}}
				/>
			</div>
		)
	}
}

export default App(LandingPage)

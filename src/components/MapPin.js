import React, {Component} from "react"
import styled from "styled-components"
import {OverlayView} from "react-google-maps"

import unitTypeID from "../assets/unitTypeID"

const getPixelPositionOffset = (width, height) => ({
	x: -(width / 2),
	y: -(height / 2),
})

const CirclePin = styled.div`
	width: 22px;
	height: 22px;
	border-radius: 50%;
	background: ${(props) => props.color};
	cursor: pointer;
	border: 3px solid white;
`

// props
// - position: position to pin on the map
// - unitType: (number) unit type id number
export default class extends Component {
	getUnitColor(unitID) {
		return unitTypeID.filter((unit) => unit["unit_type_id"] === unitID)[0].color
	}

	render() {
		const {position} = this.props
		return (
			<OverlayView
				mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
				getPixelPositionOffset={getPixelPositionOffset}
				position={position}>
				<CirclePin color={this.getUnitColor(this.props.unitType || 1)} />
			</OverlayView>
		)
	}
}

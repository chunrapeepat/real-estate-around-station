import React, {Component} from "react"
import styled from "styled-components"
import {OverlayView} from "react-google-maps"
import {Modal, Button} from "antd"

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
	state = {
		visible: false,
	}

	getUnitColor(unitID) {
		return unitTypeID.filter((unit) => unit["unit_type_id"] === unitID)[0].color
	}

	closeModal() {
		this.setState({visible: false})
	}

	openModal() {
		this.setState({visible: true})
	}

	render() {
		const {position} = this.props
		return (
			<div>
				<Modal
					title="อะไรสักอย่าง"
					visible={this.state.visible}
					onOk={this.closeModal.bind(this)}
					onCancel={this.closeModal.bind(this)}>
					อะไรสักอย่าง
				</Modal>
				<OverlayView
					mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
					getPixelPositionOffset={getPixelPositionOffset}
					position={position}>
					<CirclePin
						onClick={this.openModal.bind(this)}
						color={this.getUnitColor(this.props.unitType || 1)}
					/>
				</OverlayView>
			</div>
		)
	}
}

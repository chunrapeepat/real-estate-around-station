import React, {Component} from "react"
import styled from "styled-components"

const Container = styled.div`
	position: fixed;
	top: 0;
	width: 100vw;
	background-color: black;
	z-index: 999;
	padding: 10px 30px;

	& > h1 {
		color: #eee;
		margin: 0;
		font-size: 25px;
	}
`

export default () => (
	<Container>
		<h1>ราคาเฉลี่ยอสังหาทรัพย์ตามแนวรถไฟฟ้า</h1>
	</Container>
)

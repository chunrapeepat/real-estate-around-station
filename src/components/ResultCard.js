import React from "react"
import styled from "styled-components"

const Container = styled.div`
	display: flex;
	background: #ccc;
`

const Color = styled.div`
	width: 10px;
	background: red;
	margin-right: 15px;
`

const Content = styled.div`
	flex: 1;
	line-height: 20px;

	& > h2 {
		font-size: 16px;
		color: #777;
	}

	& > div {
		font-size: 30px;
		color: black;
	}

	& > div > span {
		font-size: 16px;
		color: black;
	}
`

export default () => (
	<Container>
		<Color />
		<Content>
			<h2>ราคาบ้านเฉลี่ย</h2>
			<div>
				5,000,000 <span>บาท</span>
			</div>
		</Content>
	</Container>
)

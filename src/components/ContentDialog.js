import React from "react"
import styled from "styled-components"

const Container = styled.div`
	position: fixed;
	z-index: 999;
	background-color: #fafafa;
	border-radius: 5px;
	border: 1px solid #ccc;
	bottom: 23px;
	right: 50px;
	width: 400px;
	height: 500px;
	padding: 20px;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`

const Heading = styled.h1`
	margin: 0;
	font-size: 22px;
	margin-bottom: 15px;
`

// props
// heading: heading or title
export default ({heading, children}) => (
	<Container>
		<Heading>{heading}</Heading>
		<div>{children}</div>
	</Container>
)

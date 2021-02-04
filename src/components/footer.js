import React, {Component} from 'react'
import { Container, Col, Row } from 'react-bootstrap'

export default class Footer extends Component {
	render() {
		return (
			<section id="footer">
				<Container fluid className="footer-bg">
					<Row className="justify-content-center">
						<a href="" className="footer-buttonlink">See Resume</a>
						<a href="" className="footer-link">Contact</a>
					</Row>
				</Container>
			</section>
			)
	}
}
import React, {Component} from 'react'
import { Container, Col, Row} from 'react-bootstrap'

export default class About extends Component {
	render() {
		return (
			<section id="about">
				<Container fluid className="about-bg">
					<Row className="justify-content-center about-greeting">
						<h1 className="about-header">Hello.</h1>
						<p className="about-subheader">I created this website to show my programming skills in order to help myself to find a job where i can apply my knowledge and skills in programming.</p>
						<Row className="justify-content-center">
							<a href="" className="about-buttonlink">Contact Me</a>
							<a href="" className="about-link">See More ></a>
						</Row>
					</Row>
				</Container>
			</section>
			)
	}
}
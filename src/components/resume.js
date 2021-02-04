import React, {Component} from 'react'
import { Container, Col, Row} from 'react-bootstrap'
import ProfilePhoto from '../assets/images/family_pic.jpg'

export default class Resume extends Component {
	render() {
		return (
			<section id="resume">
				<Container fluid className="resume-bg">
					<Row className="justify-content-center">
						<Col xs={12} md={3}>
							<Row className="justify-content-center resume-photoframe">
								<img src={ProfilePhoto} alt="test" className="resume-photo"/>
							</Row>																																					
						</Col>
						<Col xs={12} md={9}>
							<Row className="justify-content-center resume-summary">
								<p>Hi! I'm <b>Gian Zairus Sarmiento</b> a flexible, reliable, dedicated and self-motivated Programmer / Developer with 1 year experience in the field of information technology and 2 years work experience in a fast-paced environment in logistics and supply chain. Eager to offer my computer programming skills to unleash my capabilites in the information technology industry.</p>
							</Row>
						</Col>
					</Row>	
				</Container>
				<Container fluid className="resume-body">
					<Row className="justify-content-center">
						<Col xs={12} md={3}>
							<Row className="justify-content-center">
								<h3>Skills</h3>
							</Row>
							<Row className="justify-content-center">
								<Col xs={4}>
									<p>HTML</p>
									<p>CSS</p>
									<p>JavaScript</p>
									<p>PHP</p>
									<p>ReactJS</p>
									<p>ExpressJS</p>
								</Col>
								<Col xs={8}>
									<p>Intermediate</p>
									<p>Intermediate</p>
									<p>Intermediate</p>
									<p>Intermediate</p>
									<p>Intermediate</p>
									<p>Intermediate</p>
								</Col>
							</Row>
						</Col>
						<Col xs={12} md={9}>
						</Col>
					</Row>
				</Container>
			</section>
			)
	}
}
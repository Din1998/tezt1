import React from 'react';
import './PricingUi.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col,Carousel,Card} from 'react-bootstrap';


const PricingUi = props => {
	return (
		<div className="pricing-ui-main-container">
			<Container fluid>
				<Row>
					<Col md={6}>
						<Carousel className="pricing-card-carousol">
							<Carousel.Item>
								<img
									className="d-block w-100 pricing-carousol-img"
									src="https://spectrum.ieee.org/image/MzYzNjYzMw.jpeg"
									alt=""
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100 pricing-carousol-img"
									src="https://www.aoe.com/fileadmin/_processed_/2/5/csm_Fotolia_58569245_Software_Development_930_590_70_1653613cc9.jpg"
									alt=""
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100 pricing-carousol-img"
									src="https://scholarlyoa.com/wp-content/uploads/2020/05/Software-Development-Project.png"
									alt=""
								/>
							</Carousel.Item>
						</Carousel>
					</Col>
					<Col md={6} className="pricing-card-section">
						<div className="pricing-box-heading">
							<h1>{props.mainHeading}</h1>
						</div>
						<div className="pricing-box-discription">
							<p>{props.mainDiscription}</p>
						</div>
						<Row>
							<Col md={4}>
								<Card border="primary" className="pricing-card p-card-1">
									<Card.Header className="p-card-heading">Basic</Card.Header>
									<Card.Body>
										<Card.Title  className="p-card-title">Start From</Card.Title>
											<Card.Text className="number-pric">
												<div className="price-of-number">
													<h1>70,000 TK</h1>
												</div>
											</Card.Text>
									</Card.Body>
								</Card>
							</Col>
							<Col md={4}>
								<Card border="primary" className="pricing-card p-card-2">
									<Card.Header className="p-card-heading">Premium</Card.Header>
									<Card.Body>
										<Card.Title className="p-card-title">Start From</Card.Title>
											<Card.Text>
											<div className="price-of-number">
													<h1>70,000 TK</h1>
												</div>
											</Card.Text>
									</Card.Body>
								</Card>
							</Col>
							<Col md={4}>
								<Card border="primary" className="pricing-card p-card-3">
									<Card.Header className="p-card-heading">Platinam</Card.Header>
									<Card.Body>
										<Card.Title className="p-card-title">Start From</Card.Title>
											<Card.Text>
											<div className="price-of-number">
													<h1>70,000 TK</h1>
												</div>
											</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</div>
	)
}


export default PricingUi;

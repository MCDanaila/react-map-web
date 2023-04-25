import React from 'react';
import { Col, Row, ProgressBar, Tooltip, OverlayTrigger, Container } from 'react-bootstrap';
import './SampleRow.css';

const SampleRow = (props) => {
	//console.log("SAMPLES PROPS: ", props);
	const typeClass = [
		"circle"]
		.join(" ")
		.trim();

	return (
		<div className='sampleRow'>
			{/* <Col xs={1}>
                <div className={typeClass} ></div>
            </Col> */}
			<Container fluid>
				<Row>
					{props.row.sample_name}
					<Col className='pl-0 pr-0 ellipsis' xs={9}>

					</Col>
					<Col xs={3} >
						<ProgressBar>

						</ProgressBar>
					</Col>
				</Row>
				<Row className='custom-class'>
				</Row>
			</Container>

		</div>
	);
}

export default SampleRow;
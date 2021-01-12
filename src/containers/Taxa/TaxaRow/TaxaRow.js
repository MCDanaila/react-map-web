import React from 'react';
import { Col, Row, ProgressBar, Tooltip, OverlayTrigger, Container } from 'react-bootstrap';
import './TaxaRow.css';

const TaxaRow = (props) => {
    const typeClass = [
        "circle",
        props.row.env.envs[0]]
        .join(" ")
        .trim();
    var tax_basename = '';
    if (props.row.taxonomy_color != null) {
        const tax_levels = props.row.taxonomy_color.split(";");
        tax_basename = tax_levels[tax_levels.length - 1];
    }

    return (
        <div className='taxaRow'>
            {/* <Col xs={1}>
                <div className={typeClass} ></div>
            </Col> */}
            <Container fluid>
                <Row>
                    <Col className='pl-0 pr-0 ellipsis' xs={9}>
                        <div className='content'>
                            <div className={typeClass} ></div>
                            {/* <i className={"fa fa-circle " + props.row.env.envs[0]} aria-hidden="true"></i> */}
                            <a href="#"> <b> {tax_basename}  </b>: {props.row.taxa_name_color} </a> ({props.row.num_samples})
                        </div>
                    </Col>
                    <Col xs={3} >
                        <ProgressBar>
                            {props.row.env.fractions.map((fraction, index) => {
                                const intFraction = (fraction * 100).toFixed(2);
                                const classType = props.row.env.envs[index];
                                const id = 'tooltip-' + props.key + '-' + classType;
                                const renderTooltip = () => (
                                    <Tooltip id={id} >
                                        {intFraction} {classType}
                                    </Tooltip>
                                );
                                const progressBar = <ProgressBar data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom" striped className={classType} now={intFraction} key={1} />;
                                const result = <OverlayTrigger placement="bottom" overlay={renderTooltip}>
                                    {progressBar}
                                </OverlayTrigger>;
                                return progressBar;
                            })}
                        </ProgressBar>
                    </Col>
                </Row>
                <Row className='custom-class'>
                    <div><b>Taxonomy</b>: {props.row.taxonomy}</div>
                </Row>
            </Container>

        </div>
    );
}

export default TaxaRow;
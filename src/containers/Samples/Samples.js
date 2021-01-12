import React from 'react';
import Introduction from '../../components/Introduction/Introduction';
import TaxaExplorer from '../Taxa/TaxaExplorer/TaxaExplorer';
import { Col, Container, Row } from 'react-bootstrap';

export default function Samples() {
    return (
        <div style={{ flexGrow: 1 }}>
            <Introduction />
            <Container maxWidth="false">
                <Row>
                    <Col>
                        <TaxaExplorer />
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
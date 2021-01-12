import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import './TaxaExplorer.css';

const TaxaExplorer = (props) => {
    return (
        <Card>
            <Card.Header>
                Taxa Explorer
            </Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group controlId="searchTaxa">
                        <Form.Control size="sm" type="text" placeholder="Enter keywords" />
                    </Form.Group>
                    <Button variant="secondary" type="submit">
                        Search Taxa
                    </Button>
                    <div className='explorer5'>
                        <b>Also Include</b>
                    </div>
                    <Form.Check id="withoutTaxonomy" type="checkbox" label="Taxa without Taxonomy" />
                    <Form.Check id="withoutEnv" type="checkbox" label="Taxa without Environment" />
                </Form>
                <div className='explorer5'><b>Examples</b></div>
            </Card.Body>
        </Card>
    );
}

export default TaxaExplorer;
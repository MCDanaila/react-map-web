import React from 'react';
import Introduction from '../../components/Introduction/Introduction';
import TaxaExplorer from '../Taxa/TaxaExplorer/TaxaExplorer';
import { Col, Container, Row } from 'react-bootstrap';
import DataTable from './DataTable';

const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'sample_id', headerName: 'Sample ID', width: 130 },
    { field: 'sample_name', headerName: 'Sample name', width: 230 },
    { field: 'study_title', headerName: 'Project', width: 230 },
    { field: 'sample_note', headerName: 'Notes', width: 190 },
    { field: 'keywords_clean', headerName: 'Keywords', width: 190 }
];

const samplesRow = [
    {
        id: 1,
        keywords_clean: "mat;mine;sub-surface",
        sample_id: "DRS000009",
        sample_name: "DRP000009_subsurface mine microbial mat metagenome_drs000009_",
        sample_note: "This is a metagenomic project to figure out the microbial community flourished along with hot water stream in the Japanese subsurface mine.",
        study_title: "subsurface mine microbial mat metagenome"
    }, {
        id: 2,
        keywords_clean: "mat;mine;sub-surface",
        sample_id: "DRS000009",
        sample_name: "DRP000009_subsurface mine microbial mat metagenome_drs000009_",
        sample_note: "This is a metagenomic project to figure out the microbial community flourished along with hot water stream in the Japanese subsurface mine.",
        study_title: "subsurface mine microbial mat metagenome"
    }, {
        id: 3,
        keywords_clean: "mat;mine;sub-surface",
        sample_id: "DRS000009",
        sample_name: "DRP000009_subsurface mine microbial mat metagenome_drs000009_",
        sample_note: "This is a metagenomic project to figure out the microbial community flourished along with hot water stream in the Japanese subsurface mine.",
        study_title: "subsurface mine microbial mat metagenome"
    }, {
        id: 4,
        keywords_clean: "mat;mine;sub-surface",
        sample_id: "DRS000009",
        sample_name: "DRP000009_subsurface mine microbial mat metagenome_drs000009_",
        sample_note: "This is a metagenomic project to figure out the microbial community flourished along with hot water stream in the Japanese subsurface mine.",
        study_title: "subsurface mine microbial mat metagenome"
    }, {
        id: 5,
        keywords_clean: "mat;mine;sub-surface",
        sample_id: "DRS000009",
        sample_name: "DRP000009_subsurface mine microbial mat metagenome_drs000009_",
        sample_note: "This is a metagenomic project to figure out the microbial community flourished along with hot water stream in the Japanese subsurface mine.",
        study_title: "subsurface mine microbial mat metagenome"
    }];

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
                        <DataTable />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
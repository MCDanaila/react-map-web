import * as React from 'react';

/* const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
    },
]; */

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const columns = [
    { field: 'id', headerName: 'ID', width: 130 },
    { field: 'sample_id', headerName: 'Sample ID', width: 130 },
    { field: 'sample_name', headerName: 'Sample name', width: 130 },
    { field: 'study_title', headerName: 'Project', width: 130 },
    { field: 'sample_note', headerName: 'Notes', width: 90 },
    { field: 'keywords_clean', headerName: 'Keywords', width: 90 }
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

export default function DataTable() {
    return (
        <div>Data Table</div>
    );
}
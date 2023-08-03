import React from 'react';
import './SampleRow.css';
import { Link } from "react-router-dom";
import { Typography } from '@mui/material';

const SampleRow = ({ row }) => {
	//console.log("SAMPLES PROPS: ", row);
	const env = row.sample_env.split(/[;|]/)[0];
	const envClass = env === "" ? 'empty' : env;

	return (
		<div className={'card ' + envClass} style={{ textAlign: 'left' }} >
			<Typography noWrap={true}><b>Sample ID: </b>
				<Link className={envClass + ' link'} to={`/samples/${row.sample_id}`}>{row.sid}{row.sample_id}</Link>: {row.name} {row.sample_name}
			</Typography>
			<div><b>Run IDs: </b>{row.rids}</div>
			<div><b>Projects: </b>{row.projects.toString()}: </div>
			<div><b>Publications: </b>{row.publications.toString()}</div>
			<div><b>Keywords: </b>{row.keywords_clean}</div>
		</div>
	);
}

export default SampleRow;
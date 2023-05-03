import React from 'react';
import './TaxaRow.css';
import { Link } from "react-router-dom";
import { Typography } from '@mui/material';

const TaxaRow = ({ row }) => {
	const env = row.env.envs[0];
	const envClass = env === "" ? 'empty' : env;

	return (
		<div className={'card ' + envClass} style={{ textAlign: 'left' }} >
			<div><b>Taxon ID: </b>
				<Link className={envClass + ' link'} to={`/taxa/${row.taxon_id}`}>{row.taxon_id}</Link>: {row.taxa_name}
			</div>
			<div><b>Taxonomy: </b>{row.taxonomy}</div>
			<div><b>Species: </b>{row.species}: </div>
			<Typography noWrap><b>Genomes: </b>{row.ref_genomes}</Typography>
			<Typography noWrap><b>Strains: </b>{row.allstrains}</Typography>
			<Typography noWrap><b>Alias: </b>{row.aliases}</Typography>
		</div>
	);
}

export default TaxaRow;
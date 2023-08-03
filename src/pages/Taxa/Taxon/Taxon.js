import React from 'react';
import './Taxon.css';
import { useParams } from "react-router-dom";
import PageContent from '../../../containers/PageContent/PageContent';
import DUMMY_TAXA from '../../../assets/taxon.json';
import Card from '../../../components/UI/Card';
import { Typography } from '@mui/material';
import axios from 'axios';

const Taxon = () => {
	const [taxonInfo, setTaxonInfo] = React.useState(DUMMY_TAXA);
	let { tid } = useParams();

	React.useEffect(() => {
		console.log('Taxon : ', tid);
		const config = {
			method: 'post',
			url: "http://127.0.0.1:5000/api/taxa/taxon/" + tid,
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		};
		axios(config)
			.then(response => {
				console.log('set DATA from getSingleTaxon: ', response);
			})
			.catch(error => {
				console.log(error);
				console.log('set default DATA from DUMMY_TAXA');
				setTaxonInfo(DUMMY_TAXA);
			});
	}, [tid]);

	return (
		<PageContent title={'Welcome ' + tid + ' Overview'} >
			<Card style={{ overflow: "hidden", textOverflow: "ellipsis", textAlign: 'start' }}>
				<Typography noWrap><b>Taxon ID: </b> {taxonInfo.taxon_id}</Typography>
				<Typography noWrap><b>Taxa Name: </b>{taxonInfo.taxa_name}</Typography>
				<Typography noWrap><b>Species: </b>{taxonInfo.species}</Typography>
				<Typography noWrap><b>Number of Samples</b>{taxonInfo.num_samples}</Typography>
				<Typography noWrap><b>Level: </b>{taxonInfo.level}</Typography>
				<Typography noWrap><b>Aliases: </b>{taxonInfo.aliases}</Typography>
			</Card>
			<Card style={{ overflow: "hidden", textOverflow: "ellipsis", textAlign: 'start' }}>
				<Typography noWrap>{taxonInfo.strains}</Typography>
				<Typography noWrap>{taxonInfo.readcount}</Typography>
				<Typography noWrap>{taxonInfo.projcount}</Typography>
				<Typography noWrap>{taxonInfo.h_samplecount}</Typography>
				<Typography noWrap>{taxonInfo.taxonomy}</Typography>
				<Typography noWrap>{taxonInfo.ref_genomes}</Typography>
				<Typography noWrap>{taxonInfo.ref_sequence}</Typography>
				<Typography noWrap>{taxonInfo.ref_sequence_num}</Typography>
			</Card>
		</PageContent >
	);
}

export default Taxon;
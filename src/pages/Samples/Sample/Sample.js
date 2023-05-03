import React from "react";
import { useParams } from "react-router-dom";
import DUMMY_SAMPLE from '../../../assets/sample_DRS000427.json'
import PageContent from "../../../containers/PageContent/PageContent";
import Card from '../../../components/UI/Card';
import { Typography } from "@mui/material";

const Sample = (props) => {
	const [sampleInfo, setSampleInfo] = React.useState(DUMMY_SAMPLE);
	let { sid } = useParams();
	React.useEffect(() => {
		//setSampleInfo(DUMMY_SAMPLE);
	}, []);

	return (
		<PageContent title={'Sample ' + sid + ' Overview'} >
			<Card>
				<Typography noWrap={true}>{sampleInfo.sample_id}</Typography>
				<Typography noWrap={true}>{sampleInfo.lat}</Typography>
				<Typography noWrap={true}>{sampleInfo.lon}</Typography>
				<Typography noWrap={true}>{sampleInfo.sample_name}</Typography>
				<Typography noWrap={true}>{sampleInfo.sample_note}</Typography>
				<Typography noWrap={true}>{sampleInfo.sample_note_raw}</Typography>
				<Typography noWrap={true}>{sampleInfo.keywords_clean}</Typography>
				<Typography noWrap={true}>{sampleInfo.keywords_clean_colored}</Typography>
				<Typography noWrap={true}>{sampleInfo.rids}</Typography>
				<Typography noWrap={true}>{sampleInfo.sample_env}</Typography>
			</Card>
			{sampleInfo.projects.map(prj => <Card>
				<Typography noWrap={true}>{prj.pid}</Typography>
				<Typography noWrap={true}>{prj.title}</Typography>
				<Typography noWrap={true}>{prj.abstract}</Typography>
				<Typography noWrap={true}>{prj.description}</Typography>
			</Card>)}
			{sampleInfo.publications.map(pub => <Card>
				<Typography noWrap={true}>{pub.pmid}</Typography>
				<Typography noWrap={true}>{pub.authors}</Typography>
				<Typography noWrap={true}>{pub.title}</Typography>
				<Typography noWrap={true}>{pub.year}</Typography>
			</Card>)}
			<Card>
				<ul>
					{Object.keys(sampleInfo.meta).map(k => <li>{k}: {sampleInfo.meta[k]}</li>)}
				</ul>

			</Card>
		</PageContent >
	);
}

export default Sample;
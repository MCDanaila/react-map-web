import React from "react";
import { styled } from '@mui/material/styles';
import { useParams } from "react-router-dom";
import DUMMY_SAMPLE from '../../../assets/sample_DRS000427.json';
import DUMMY_RUN_DRR000776 from '../../../assets/run_DRR000776.json';
import DUMMY_RUN_DRR000777 from '../../../assets/run_DRR000777.json';
import PageContent from "../../../containers/PageContent/PageContent";
import { Typography, Grid, Divider, Button } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CircleEnv from "../../../components/UI/CircleEnv";

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RunContainer from "../RunContainer/RunContainer";

const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}));

const Sample = (props) => {
	const [sampleInfo, setSampleInfo] = React.useState(DUMMY_SAMPLE);
	const [runInfo, setRunInfo] = React.useState(DUMMY_RUN_DRR000776);
	const [metadataExpanded, setMetadataExpanded] = React.useState(false);
	const [projectsExpanded, setProjectsExpanded] = React.useState(false);
	const [publicationsExpanded, setPublicationsExpanded] = React.useState(false);

	let { sid } = useParams();

	React.useEffect(() => {
		//setSampleInfo(DUMMY_SAMPLE);
	}, []);

	const handleRunButton = (runId) => {
		console.log(runId)
		switch(runId) {
			case 'DRR000776':
				setRunInfo(DUMMY_RUN_DRR000776);
				return;
			case 'DRR000777':
				setRunInfo(DUMMY_RUN_DRR000777);
				return;
			default:
				setRunInfo(DUMMY_RUN_DRR000776);
				return;
		};
	};

	return (
		<PageContent title={'Sample ' + sid + ' Overview'} >
			<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
				<Grid item xs={12}>
					<Card>
						<CardHeader avatar={<CircleEnv env={sampleInfo.sample_env} />}
							action={<OpenInNewIcon />}
							titleTypographyProps={{ variant: 'h5', float: 'left' }}
							title={'Sample ' + sid}
							component='div'
						/>
						<CardContent>
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
						</CardContent>
						<CardActions disableSpacing>
							<Typography variant="h6" >Metadata</Typography>
							<ExpandMore expand={metadataExpanded}
								onClick={() => setMetadataExpanded(!metadataExpanded)}
								aria-expanded={metadataExpanded}
								aria-label="show more"
							>
								<ExpandMoreIcon />
							</ExpandMore>
						</CardActions>
						<Collapse in={metadataExpanded} timeout="auto" unmountOnExit>
							<CardContent>
								<ul>
									{Object.keys(sampleInfo.meta).map(k => <li>{k}: {sampleInfo.meta[k]}</li>)}
								</ul>
							</CardContent>
						</Collapse>
					</Card>
				</Grid>
				<Grid item xs={6}>
					<Card>
						<CardHeader
							action={<OpenInNewIcon />}
							title='Projects'
						/>
						<CardActions disableSpacing>
							<ExpandMore
								expand={projectsExpanded}
								onClick={() => setProjectsExpanded(!projectsExpanded)}
								aria-expanded={projectsExpanded}
								aria-label="show more"
							>
								<ExpandMoreIcon />
							</ExpandMore>
						</CardActions>
						<Collapse in={projectsExpanded} timeout="auto" unmountOnExit>
							<CardContent>
								{sampleInfo.projects.map(prj => <Card>
									<Typography >{prj.pid}</Typography>
									<Typography >{prj.title}</Typography>
									<Typography >{prj.abstract}</Typography>
									<Typography >{prj.description}</Typography>
								</Card>)}
							</CardContent>
						</Collapse>
					</Card>
				</Grid>
				<Grid item xs={6}>
					<Card>
						<CardHeader
							action={<OpenInNewIcon />}
							title='Pubblications'
						/>
						<CardActions disableSpacing>
							<ExpandMore
								expand={publicationsExpanded}
								onClick={() => setPublicationsExpanded(!publicationsExpanded)}
								aria-expanded={publicationsExpanded}
								aria-label="show more"
							>
								<ExpandMoreIcon />
							</ExpandMore>
						</CardActions>
						<Collapse in={publicationsExpanded} timeout="auto" unmountOnExit>
							<CardContent>
								{sampleInfo.publications.map(pub => <Card>
									<Typography >{pub.pmid}</Typography>
									<Typography >{pub.authors}</Typography>
									<Typography >{pub.title}</Typography>
									<Typography >{pub.year}</Typography>
								</Card>)}
							</CardContent>
						</Collapse>
					</Card>
				</Grid>
			</Grid>
			<Divider style={{ margin: '10px' }} />
			{sampleInfo.rids.split(',').map(rid =>
				<Button style={{ backgroundColor: 'white' }} id={props.field} size='small'
					color='secondary'
					variant='outlined'
					value={rid}
					onClick={() => handleRunButton(rid)}>
					{rid}
				</Button>
			)}
			<Divider style={{ margin: '10px' }} />
			<RunContainer runInfo={runInfo} />
		</PageContent >
	);
}

export default Sample;
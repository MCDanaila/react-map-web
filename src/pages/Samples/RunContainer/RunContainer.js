import React from "react";
import './RunContainer.css';
import { Paper, Typography, Grid, Select, Card, CardHeader, CardContent } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

/* import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';*/
import Plot from 'react-plotly.js';

const COLORS = ['#FFEBEE', '#FFCDD2', '#EF9A9A', '#E57373', '#EF5350', '#F44336', '#E53935', '#D32F2F', '#C62828', '#B71C1C', '#FF8A80',
	'#FF5252', '#FF1744', '#D50000', '#E91E63', '#FCE4EC', '#F8BBD0', '#F48FB1', '#F06292', '#EC407A', '#E91E63', '#D81B60', '#C2185B', '#AD1457', '#880E4F',
	'#FF80AB', '#FF4081', '#F50057', '#C51162', '#9C27B0', '#F3E5F5', '#E1BEE7', '#CE93D8', '#BA68C8', '#AB47BC', '#8E24AA', '#7B1FA2', '#6A1B9A',
	'#4A148C', '#EA80FC', '#E040FB', '#D500F9', '#AA00FF', '#EDE7F6', '#D1C4E9', '#B39DDB', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8',
	'#4527A0', '#311B92', '#B388FF', '#7C4DFF', '#651FFF', '#6200EA', '#E8EAF6', '#C5CAE9', '#9FA8DA', '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB',
	'#303F9F', '#283593', '#1A237E', '#8C9EFF', '#536DFE', '#3D5AFE', '#304FFE', '#2196F3', '#E3F2FD', '#BBDEFB', '#90CAF9', '#64B5F6', '#42A5F5', '#2196F3',
	'#1E88E5', '#1976D2', '#1565C0', '#0D47A1', '#82B1FF', '#448AFF', '#2979FF', '#2962FF', '#03A9F4', '#E1F5FE', '#B3E5FC', '#81D4FA', '#4FC3F7', '#29B6F6',
	'#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B', '#80D8FF', '#40C4FF', '#00B0FF', '#0091EA', '#00BCD4', '#E0F7FA', '#B2EBF2', '#80DEEA', '#4DD0E1',
	'#26C6DA', '#00BCD4', '#00ACC1', '#0097A7', '#00838F', '#006064', '#84FFFF', '#18FFFF', '#00E5FF', '#00B8D4', '#009688', '#E0F2F1', '#B2DFDB', '#80CBC4',
	'#4DB6AC', '#26A69A', '#009688', '#00897B', '#00796B', '#00695C', '#004D40', '#A7FFEB', '#64FFDA', '#1DE9B6', '#00BFA5', '#4CAF50', '#E8F5E9', '#C8E6C9',
	'#A5D6A7', '#81C784', '#66BB6A', '#4CAF50', '#43A047', '#388E3C', '#2E7D32', '#1B5E20', '#B9F6CA', '#69F0AE', '#00E676', '#00C853', '#8BC34A', '#F1F8E9',
	'#DCEDC8', '#C5E1A5', '#AED581', '#9CCC65', '#8BC34A', '#7CB342', '#689F38', '#558B2F', '#33691E', '#CCFF90', '#B2FF59', '#76FF03', '#64DD17', '#CDDC39',
	'#F9FBE7', '#F0F4C3', '#E6EE9C', '#DCE775', '#D4E157', '#CDDC39', '#C0CA33', '#AFB42B', '#9E9D24', '#827717', '#F4FF81', '#EEFF41', '#C6FF00', '#AEEA00',
	'#FFEB3B', '#FFFDE7', '#FFF9C4', '#FFF59D', '#FFF176', '#FFEE58', '#FFEB3B', '#FDD835', '#FBC02D', '#F9A825', '#F57F17', '#FFFF8D', '#FFFF00', '#FFEA00',
	'#FFD600', '#FFC107', '#FFF8E1', '#FFECB3', '#FFE082', '#FFD54F', '#FFCA28', '#FFC107', '#FFB300', '#FFA000', '#FF8F00', '#FF6F00', '#FFE57F', '#FFD740',
	'#FFC400', '#FFAB00', '#FF9800', '#FFF3E0', '#FFE0B2', '#FFCC80', '#FFB74D', '#FFA726', '#FF9800', '#FB8C00', '#F57C00', '#EF6C00', '#E65100', '#FFD180',
	'#FFAB40', '#FF9100', '#FF6D00', '#FF5722', '#FBE9E7', '#FFCCBC', '#FFAB91', '#FF8A65', '#FF7043', '#FF5722', '#F4511E', '#E64A19', '#D84315', '#BF360C',
	'#FF9E80', '#FF6E40', '#FF3D00', '#DD2C00', '#795548', '#EFEBE9', '#D7CCC8', '#BCAAA4', '#A1887F', '#8D6E63', '#795548', '#6D4C41', '#5D4037', '#4E342E',
	'#3E2723', '#9E9E9E', '#FAFAFA', '#F5F5F5', '#CCC', '#E0E0E0', '#BDBDBD', '#9E9E9E', '#757575', '#616161', '#424242', '#212121', '#607D8B', '#ECEFF1',
	'#CFD8DC', '#B0BEC5', '#90A4AE', '#78909C', '#607D8B', '#546E7A', '#455A64', '#37474F', '#263238', '#000000', '#FFFFFF',];

const DUMMY_DATA = {
	labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
	datasets: [
		{
			label: '# of Votes',
			data: [12, 19, 3, 5, 2, 3],
			backgroundColor: [
				'rgba(255, 99, 132, 0.5)',
				'rgba(54, 162, 235, 0.5)',
				'rgba(255, 206, 86, 0.5)',
				'rgba(75, 192, 192, 0.5)',
				'rgba(153, 102, 255, 0.5)',
				'rgba(255, 159, 64, 0.5)',
			],
			borderWidth: 1,
		},
	],
};

const sample_layout_otu_dist = {
	width: 1000,
	height: 200,
	font: {
		family: 'Arial',
		size: 11,
		color: '#7f7f7f'
	},
	title: {
		xanchor: 'left',
		x: 0,
		text: '<b>Taxa Abundances Densities</b>',
	},
	margin: {
		l: 0,
		r: 60,
		b: 80,
		t: 50
	},
	paper_bgcolor: '#ffffff',
	plot_bgcolor: '#ffffff',
	hovermode: 'closest',
	annotations: [],
	yaxis: {
		title: 'number of samples',
		autotick: true,
		autorange: true,
		//type: 'log',
		side: 'right',
		showticklabels: true,
		ticks: '',
		ticksuffix: ' ',
		tickfont: {
			family: 'Arial',
			size: 10,
			color: '#999999'
		},
		showgrid: true,
	},
	xaxis: {
		title: 'log10 (abundance)',
		showgrid: true,
		autotick: true,
		showticklabels: true,
		tickvals: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
		ticktext: ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10", "a11", "a12", "a13", "a14", "a15", "a16", "a17", "a18", "a19", "a20", "a21", "a22", "a23", "a24", "a25", "a26", "a27", "a28", "a29", "a30"],
		side: 'bottom',
		ticksuffix: ' ',
		ticks: '',
		tickfont: {
			family: 'Arial',
			size: 10,
			color: '#999999'
		},
	}
};

const layout_sample_phyla = {
	width: 1000,
	height: 270,
	titlefont: {
		family: 'Arial',
		size: 14,
		color: '#7f7f7f'
	},
	legend: {
		orientation: "v",
		font: {
			family: 'Arial',
			size: 13,
		},
		x: 1.05,
		bordercolor: '#f1f1f1',
		borderwidth: 1
	},
	labelfont: {
		family: 'Arial',
		size: 12,
		color: '#7f7f7f'
	},
	font: {
		family: 'Arial',
		size: 10,
		color: '#7f7f7f'
	},
	title: {
		xanchor: 'left',
		x: 0,
		text: '<b>Ranked Taxa Abundance by Phylum</b>',
	},
	margin: {
		l: 0,
		r: 80,
		b: 30,
		t: 40
	},
	hovermode: 'closest',
	barmode: 'group',
	annotations: [],
	yaxis: {
		title: '',
		type: 'log',
		autotick: true,
		autorange: true,
		side: 'right',
		showticklabels: true,
		ticks: '',
		ticksuffix: ' ',
		tickfont: {
			family: 'Arial',
			size: 12,
			color: '#999999'
		},
		titlefont: {
			family: 'Arial',
			size: 13,
			color: '#999999'
		}
	},
	xaxis: {
		title: 'Taxa',
		mode: "bar",
		side: 'bottom',
		ticksuffix: ' ',
		ticks: '',
		tickfont: {
			family: 'Arial',
			size: 12,
			color: '#999999'
		},
		titlefont: {
			family: 'Arial',
			size: 13,
			color: '#999999'
		}
	}
};

const RunContainer = ({ runInfo }) => {
	const [level, setLevel] = React.useState('97%');
	const [sunburstData, setSunburstData] = React.useState(DUMMY_DATA);
	const [otuDistData, setOtuDistData] = React.useState([]);
	const [phylumData, setPhylumData] = React.useState([]);

	const handleChange = (event) => {
		setLevel(event.target.value);
	};

	React.useEffect(() => {
		const mapstats = runInfo.mapstats;
		const mapSeqReads = mapstats.mseqreads;

		let lv_idx = runInfo.mapstats.levels.indexOf(level)
		let levelFraction = mapstats.fraction[lv_idx] / 100;

		var mappedLevelReads = 0;
		if(levelFraction) {
			mappedLevelReads = Math.round(mapSeqReads * levelFraction);
		}

		var unmappedReads = mapSeqReads - mappedLevelReads;

		var ambig = Math.floor((mapstats.ambig[lv_idx] / 100) * mapSeqReads);
		var notInRef = Math.floor((mapstats.notinref[lv_idx] / 100) * mapSeqReads);
		// workaround to solve the rounding error from fraction moltiplication that does not allow the plot to be shown
		if(ambig + notInRef !== unmappedReads) {
			if(ambig > notInRef)
				ambig = ambig - (ambig + notInRef - unmappedReads);
			else
				notInRef = notInRef - (ambig + notInRef - unmappedReads);
		}
		var totalReads = mappedLevelReads + unmappedReads;
		var data = [{
			type: "sunburst",
			labels: ["Reads", "Mapped", "Unmapped", "Ambiguous", "Not in Reference"],
			parents: ["", "Reads", "Reads", "Unmapped", "Unmapped"],
			values: [totalReads, Math.floor(mappedLevelReads), unmappedReads, ambig, notInRef],
			outsidetextfont: { size: 14, color: "#377eb8" },
			leaf: { opacity: 0.4 },
			marker: {
				line: { width: 2 },
				colors: ["white", "rgba(55,128,191,0.8)", "rgb(204,204,204)"]
			},
			text: ["Total SSU rRNA reads", "Mapped reads", "Unmapped reads", "reads mapped to two or more OTUs with high score", "lack of a similar enough reference sequence at the specified level"],
			textinfo: 'label+percent entry',
			branchvalues: 'total'
		}];
		setSunburstData(data);
	}, [level, runInfo]);

	React.useEffect(() => {
		var run_id = runInfo.rid;
		var temp = runInfo.abdensity;

		// density plot
		if(temp !== undefined && temp.density !== undefined && temp.density.y.length > 0) {
			// instead of values use density
			let density_step = Math.abs(temp.density.xmin - temp.density.xmax) / temp.density.y.length;
			let density_x = [];
			let label_x = [];
			let val = temp.density.xmin;
			while(val < temp.density.xmax) {
				density_x.push(val);
				label_x.push(String(val.toFixed(2)))
				val += density_step;
			}
			let data = [{
				x: density_x,
				y: temp.density.y,
				type: 'scatter'
			}];
			sample_layout_otu_dist.xaxis.ticktext = label_x;
			sample_layout_otu_dist.xaxis.tickvals = density_x;
			setOtuDistData(data);
		}
	}, [level, runInfo]);

	React.useEffect(() => {
		var temp = runInfo.taxaab;
		if(temp != null) {
			//console.log('Phylum :', temp);
			if(Object.keys(temp["phylum"]).length > 0) {
				//var colors = temp["phylumcol"];
				var plot_data_sg = [];
				var index_from = 0;
				for(var i2 = 0;i2 < temp.phylum.length;i2++) {
					var habitats_x = [];
					var text = [];
					var index_to = temp.phylumend[i2] - 1;
					var habitats_y = [];
					for(var j = index_from;j <= index_to;j++) {
						// current_x += 1;
						habitats_x.push(j);
						habitats_y.push(temp.count[j] / temp.rcount);
						text.push(temp.taxa_names[j]);
						let random_i_col = Math.floor((Math.random() * (COLORS.length - 1)))
						var temp1 = {
							x: habitats_x,
							y: habitats_y,
							type: 'bar',
							line: { color: COLORS[random_i_col] },
							marker: { color: COLORS[random_i_col] },
							hovertemplate: '%{text}<br>%{y}<extra></extra>',
							text: text,
							name: temp["phylum"][i2] + "(" + habitats_x.length + ")",
							legendgroup: "LG" + i2
						};
					}
					plot_data_sg.push(temp1);
					index_from = index_to + 1;
				}
				setPhylumData(plot_data_sg);
			}
		}
	}, [level, runInfo]);

	return (
		<React.Fragment>
			<Card>
				<CardHeader
					action={<OpenInNewIcon />}
					titleTypographyProps={{ variant: 'h5', float: 'left' }}
					title={'Run ' + runInfo.rid}
					component='div'
				/>
				<CardContent>
					<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
						<Grid item xs={6}>
							<Typography >{runInfo.instrument}</Typography>
							<Typography >{runInfo.rtype}</Typography>
							<Typography >{runInfo.region}</Typography>
							<Typography >{runInfo.note}</Typography>
						</Grid>
						<Grid item xs={6}>
							<Typography >{runInfo.mapstats.totalreads}</Typography>
							<Typography >{runInfo.mapstats.mseqreads}</Typography>
							<Typography >{runInfo.mapstats.mappedreads}</Typography>
							<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
								<InputLabel id="demo-select-small-label">Level</InputLabel>
								<Select labelId="demo-select-small-label"
									key='runLevel'
									id="demo-select-small"
									value={level}
									label="Level"
									onChange={handleChange}>
									<MenuItem value={'90%'}>Level 90</MenuItem>
									<MenuItem value={'96%'}>Level 96</MenuItem>
									<MenuItem value={'97%'}>Level 97</MenuItem>
									<MenuItem value={'98%'}>Level 98</MenuItem>
									<MenuItem value={'99%'}>Level 99</MenuItem>
								</Select>
							</FormControl>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
			<Paper className="paperContainer" elevation={3}>
				<Plot
					data={sunburstData}
					layout={{
						width: 500, height: 300,
						size: 11,
						title: {
							xanchor: 'left',
							x: 0,
							text: `<b>Mapped Reads VS Unmapped Reads (Lv. ${level})</b>`,
						},
						hovermode: 'x',
						margin: { l: 0, r: 30, b: 0, t: 30 },
					}}
					config={{ displaylogo: false, displayModeBar: false }}
				/>
			</Paper>
			<Paper className="paperContainer" elevation={3}>
				<Plot layout={sample_layout_otu_dist} data={otuDistData} config={{ displaylogo: false, displayModeBar: false }} />
			</Paper>
			<Paper className="paperContainer" elevation={3}>
				<Plot layout={layout_sample_phyla} data={phylumData} config={{ displaylogo: false, displayModeBar: false }} />
			</Paper>
		</React.Fragment>
	);
}

export default RunContainer;
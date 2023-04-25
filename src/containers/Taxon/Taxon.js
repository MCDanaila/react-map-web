import React, { PureComponent } from 'react';
import './Taxon.css';
import { Container } from 'react-bootstrap';
import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from 'recharts';
// !! PureComponent is checking any props like shouldComponentUpdate did
const pieData = [
	{
		"value": 210000,
		"fraction": 2100,
		"display_value": 1,
		"cid": 0,
		"display_value1": 210000,
		"display_value2": 77,
		"label": "animal",
		"color": "#D27979",
		"inner": [
			{
				"cid": "0_0",
				"value": 199000,
				"fraction": 1990,
				"display_value": 1,
				"display_value1": 199000,
				"display_value2": 72.8,
				"label": "human",
				"display_label": "human",
				"color": "#D27979"
			},
			{
				"cid": "0_1",
				"value": 3070,
				"fraction": 30.7,
				"display_value": 1,
				"display_value1": 3070,
				"display_value2": 1.1199999999999999,
				"label": "mouse",
				"display_label": "mouse",
				"color": "#D27979"
			},
			{
				"cid": "0_2",
				"value": 920,
				"fraction": 9.200000000000001,
				"display_value": 1,
				"display_value1": 920,
				"display_value2": 0.337,
				"label": "fish",
				"display_label": "fish",
				"color": "#D27979"
			},
			{
				"cid": "0_3",
				"value": 604,
				"fraction": 6.04,
				"display_value": 1,
				"display_value1": 604,
				"display_value2": 0.22100000000000003,
				"label": "cattle",
				"display_label": "cattle",
				"color": "#D27979"
			},
			{
				"cid": "0_4",
				"value": 481,
				"fraction": 4.81,
				"display_value": 1,
				"display_value1": 481,
				"display_value2": 0.17600000000000002,
				"label": "mosquito",
				"display_label": "mosquito",
				"color": "#D27979"
			},
			{
				"cid": "0_5",
				"value": 336,
				"fraction": 3.3600000000000003,
				"display_value": 1,
				"display_value1": 336,
				"display_value2": 0.123,
				"label": "macaque",
				"display_label": "macaque",
				"color": "#D27979"
			},
			{
				"cid": "0_6",
				"value": 300,
				"fraction": 3,
				"display_value": 1,
				"display_value1": 300,
				"display_value2": 0.11,
				"label": "sheep",
				"display_label": "sheep",
				"color": "#D27979"
			},
			{
				"cid": "0_7",
				"value": 236,
				"fraction": 2.3600000000000003,
				"display_value": 1,
				"display_value1": 236,
				"display_value2": 0.08639999999999999,
				"label": "baboon",
				"display_label": "baboon",
				"color": "#D27979"
			},
			{
				"cid": "0_8",
				"value": 185,
				"fraction": 1.8499999999999999,
				"display_value": 1,
				"display_value1": 185,
				"display_value2": 0.0677,
				"label": "bird",
				"display_label": "bird",
				"color": "#D27979"
			},
			{
				"cid": "0_9",
				"value": 108,
				"fraction": 1.08,
				"display_value": 1,
				"display_value1": 108,
				"display_value2": 0.0395,
				"label": "tick",
				"display_label": "tick",
				"color": "#D27979"
			},
			{
				"cid": "0_10",
				"value": 82,
				"fraction": 0.8200000000000001,
				"display_value": 1,
				"display_value1": 82,
				"display_value2": 0.03,
				"label": "horse",
				"display_label": "horse",
				"color": "#D27979"
			},
			{
				"cid": "0_11",
				"value": 76,
				"fraction": 0.76,
				"display_value": 1,
				"display_value1": 76,
				"display_value2": 0.0278,
				"label": "goat",
				"display_label": "goat",
				"color": "#D27979"
			},
			{
				"cid": "0_12",
				"value": 75,
				"fraction": 0.75,
				"display_value": 1,
				"display_value1": 75,
				"display_value2": 0.0274,
				"label": "bumblebee",
				"display_label": "bumblebee",
				"color": "#D27979"
			},
			{
				"cid": "0_13",
				"value": 48,
				"fraction": 0.48,
				"display_value": 1,
				"display_value1": 48,
				"display_value2": 0.0176,
				"label": "termite",
				"display_label": "termite",
				"color": "#D27979"
			},
			{
				"cid": "0_14",
				"value": 32,
				"fraction": 0.31999999999999995,
				"display_value": 1,
				"display_value1": 32,
				"display_value2": 0.0117,
				"label": "gorilla",
				"display_label": "gorilla",
				"color": "#D27979"
			},
			{
				"cid": "0_15",
				"value": 21,
				"fraction": 0.21000000000000002,
				"display_value": 1,
				"display_value1": 21,
				"display_value2": 0.00769,
				"label": "tadpole",
				"display_label": "tadpole",
				"color": "#D27979"
			},
			{
				"cid": "0_16",
				"value": 20,
				"fraction": 0.2,
				"display_value": 1,
				"display_value1": 20,
				"display_value2": 0.00732,
				"label": "whale",
				"display_label": "whale",
				"color": "#D27979"
			},
			{
				"cid": "0_17",
				"value": 20,
				"fraction": 0.2,
				"display_value": 1,
				"display_value1": 20,
				"display_value2": 0.00732,
				"label": "zebrafish",
				"display_label": "zebrafish",
				"color": "#D27979"
			},
			{
				"cid": "0_18",
				"value": 14,
				"fraction": 0.14,
				"display_value": 1,
				"display_value1": 14,
				"display_value2": 0.0051199999999999996,
				"label": "chimpanzee",
				"display_label": "chimpanzee",
				"color": "#D27979"
			},
			{
				"cid": "0_19",
				"value": 9,
				"fraction": 0.09,
				"display_value": 1,
				"display_value1": 9,
				"display_value2": 0.00329,
				"label": "seal",
				"display_label": "seal",
				"color": "#D27979"
			},
			{
				"cid": "0_20",
				"value": 3,
				"fraction": 0.03,
				"display_value": 1,
				"display_value1": 3,
				"display_value2": 0.0011,
				"label": "pigeon",
				"display_label": "pigeon",
				"color": "#D27979"
			},
			{
				"cid": "0_21",
				"value": 2,
				"fraction": 0.019999999999999997,
				"display_value": 1,
				"display_value1": 2,
				"display_value2": 0.000732,
				"label": "sparrow",
				"display_label": "sparrow",
				"color": "#D27979"
			},
			{
				"cid": "0_22",
				"value": 2,
				"fraction": 0.019999999999999997,
				"display_value": 1,
				"display_value1": 2,
				"display_value2": 0.000732,
				"label": "shark",
				"display_label": "shark",
				"color": "#D27979"
			},
			{
				"cid": "0_23",
				"value": 1,
				"fraction": 0.009999999999999998,
				"display_value": 1,
				"display_value1": 1,
				"display_value2": 0.000366,
				"label": "fruitfly",
				"display_label": "fruitfly",
				"color": "#D27979"
			},
			{
				"cid": "0_24",
				"value": 1,
				"fraction": 0.009999999999999998,
				"display_value": 1,
				"display_value1": 1,
				"display_value2": 0.000366,
				"label": "swallow",
				"display_label": "swallow",
				"color": "#D27979"
			},
			{
				"cid": "0_25",
				"value": 4740,
				"fraction": 47.4,
				"display_value": 1,
				"display_value1": 4740,
				"display_value2": 1.73,
				"label": "unknown",
				"display_label": "unknown",
				"color": "#eeeeee"
			}
		]
	},
	{
		"value": 9250,
		"fraction": 92.5,
		"display_value": 1,
		"cid": 1,
		"display_value1": 9250,
		"display_value2": 3.38,
		"label": "aquatic",
		"color": "#79CAD1",
		"inner": [
			{
				"cid": "1_0",
				"value": 2060,
				"fraction": 20.6,
				"display_value": 1,
				"display_value1": 2060,
				"display_value2": 0.753,
				"label": "river",
				"display_label": "river",
				"color": "#79CAD1"
			},
			{
				"cid": "1_1",
				"value": 1970,
				"fraction": 19.7,
				"display_value": 1,
				"display_value1": 1970,
				"display_value2": 0.719,
				"label": "waste water",
				"display_label": "waste water",
				"color": "#79CAD1"
			},
			{
				"cid": "1_2",
				"value": 807,
				"fraction": 8.07,
				"display_value": 1,
				"display_value1": 807,
				"display_value2": 0.295,
				"label": "marine",
				"display_label": "marine",
				"color": "#79CAD1"
			},
			{
				"cid": "1_3",
				"value": 760,
				"fraction": 7.6,
				"display_value": 1,
				"display_value1": 760,
				"display_value2": 0.27799999999999997,
				"label": "lake",
				"display_label": "lake",
				"color": "#79CAD1"
			},
			{
				"cid": "1_4",
				"value": 512,
				"fraction": 5.12,
				"display_value": 1,
				"display_value1": 512,
				"display_value2": 0.187,
				"label": "sediment",
				"display_label": "sediment",
				"color": "#79CAD1"
			},
			{
				"cid": "1_5",
				"value": 392,
				"fraction": 3.92,
				"display_value": 1,
				"display_value1": 392,
				"display_value2": 0.14300000000000002,
				"label": "reservoir",
				"display_label": "reservoir",
				"color": "#79CAD1"
			},
			{
				"cid": "1_6",
				"value": 203,
				"fraction": 2.03,
				"display_value": 1,
				"display_value1": 203,
				"display_value2": 0.07429999999999999,
				"label": "ocean",
				"display_label": "ocean",
				"color": "#79CAD1"
			},
			{
				"cid": "1_7",
				"value": 145,
				"fraction": 1.45,
				"display_value": 1,
				"display_value1": 145,
				"display_value2": 0.0531,
				"label": "groundwater",
				"display_label": "groundwater",
				"color": "#79CAD1"
			},
			{
				"cid": "1_8",
				"value": 74,
				"fraction": 0.74,
				"display_value": 1,
				"display_value1": 74,
				"display_value2": 0.0271,
				"label": "coastal",
				"display_label": "coastal",
				"color": "#79CAD1"
			},
			{
				"cid": "1_9",
				"value": 23,
				"fraction": 0.23,
				"display_value": 1,
				"display_value1": 23,
				"display_value2": 0.00842,
				"label": "brine",
				"display_label": "brine",
				"color": "#79CAD1"
			},
			{
				"cid": "1_10",
				"value": 19,
				"fraction": 0.19000000000000003,
				"display_value": 1,
				"display_value1": 19,
				"display_value2": 0.00695,
				"label": "estuary",
				"display_label": "estuary",
				"color": "#79CAD1"
			},
			{
				"cid": "1_11",
				"value": 2290,
				"fraction": 22.9,
				"display_value": 1,
				"display_value1": 2290,
				"display_value2": 0.8380000000000001,
				"label": "unknown",
				"display_label": "unknown",
				"color": "#eeeeee"
			}
		]
	},
	{
		"value": 3610,
		"fraction": 36.1,
		"display_value": 1,
		"cid": 2,
		"display_value1": 3610,
		"display_value2": 1.32,
		"label": "soil",
		"color": "#CEBE7A",
		"inner": [
			{
				"cid": "2_0",
				"value": 1040,
				"fraction": 10.400000000000002,
				"display_value": 1,
				"display_value1": 1040,
				"display_value2": 0.382,
				"label": "farm",
				"display_label": "farm",
				"color": "#CEBE7A"
			},
			{
				"cid": "2_1",
				"value": 640,
				"fraction": 6.4,
				"display_value": 1,
				"display_value1": 640,
				"display_value2": 0.234,
				"label": "field",
				"display_label": "field",
				"color": "#CEBE7A"
			},
			{
				"cid": "2_2",
				"value": 579,
				"fraction": 5.79,
				"display_value": 1,
				"display_value1": 579,
				"display_value2": 0.212,
				"label": "forest",
				"display_label": "forest",
				"color": "#CEBE7A"
			},
			{
				"cid": "2_3",
				"value": 361,
				"fraction": 3.6100000000000003,
				"display_value": 1,
				"display_value1": 361,
				"display_value2": 0.132,
				"label": "agricultural",
				"display_label": "agricultural",
				"color": "#CEBE7A"
			},
			{
				"cid": "2_4",
				"value": 121,
				"fraction": 1.2100000000000002,
				"display_value": 1,
				"display_value1": 121,
				"display_value2": 0.0443,
				"label": "peatland",
				"display_label": "peatland",
				"color": "#CEBE7A"
			},
			{
				"cid": "2_5",
				"value": 110,
				"fraction": 1.1,
				"display_value": 1,
				"display_value1": 110,
				"display_value2": 0.040299999999999996,
				"label": "desert",
				"display_label": "desert",
				"color": "#CEBE7A"
			},
			{
				"cid": "2_6",
				"value": 90,
				"fraction": 0.9000000000000001,
				"display_value": 1,
				"display_value1": 90,
				"display_value2": 0.0329,
				"label": "paddy",
				"display_label": "paddy",
				"color": "#CEBE7A"
			},
			{
				"cid": "2_7",
				"value": 64,
				"fraction": 0.6400000000000001,
				"display_value": 1,
				"display_value1": 64,
				"display_value2": 0.0234,
				"label": "tundra",
				"display_label": "tundra",
				"color": "#CEBE7A"
			},
			{
				"cid": "2_8",
				"value": 13,
				"fraction": 0.13,
				"display_value": 1,
				"display_value1": 13,
				"display_value2": 0.0047599999999999995,
				"label": "arable",
				"display_label": "arable",
				"color": "#CEBE7A"
			},
			{
				"cid": "2_9",
				"value": 2,
				"fraction": 0.020000000000000004,
				"display_value": 1,
				"display_value1": 2,
				"display_value2": 0.000732,
				"label": "shrub",
				"display_label": "shrub",
				"color": "#CEBE7A"
			},
			{
				"cid": "2_10",
				"value": 589,
				"fraction": 5.890000000000001,
				"display_value": 1,
				"display_value1": 589,
				"display_value2": 0.216,
				"label": "unknown",
				"display_label": "unknown",
				"color": "#eeeeee"
			}
		]
	},
	{
		"value": 1840,
		"fraction": 18.4,
		"display_value": 1,
		"cid": 3,
		"display_value1": 1840,
		"display_value2": 0.672,
		"label": "plant",
		"color": "#BCD279",
		"inner": [
			{
				"cid": "3_0",
				"value": 984,
				"fraction": 9.84,
				"display_value": 1,
				"display_value1": 984,
				"display_value2": 0.36,
				"label": "rhizosphere",
				"display_label": "rhizosphere",
				"color": "#BCD279"
			},
			{
				"cid": "3_1",
				"value": 346,
				"fraction": 3.4599999999999995,
				"display_value": 1,
				"display_value1": 346,
				"display_value2": 0.127,
				"label": "wood",
				"display_label": "wood",
				"color": "#BCD279"
			},
			{
				"cid": "3_2",
				"value": 140,
				"fraction": 1.4,
				"display_value": 1,
				"display_value1": 140,
				"display_value2": 0.051199999999999996,
				"label": "leaf",
				"display_label": "leaf",
				"color": "#BCD279"
			},
			{
				"cid": "3_3",
				"value": 131,
				"fraction": 1.31,
				"display_value": 1,
				"display_value1": 131,
				"display_value2": 0.0479,
				"label": "stem",
				"display_label": "stem",
				"color": "#BCD279"
			},
			{
				"cid": "3_4",
				"value": 107,
				"fraction": 1.0699999999999998,
				"display_value": 1,
				"display_value1": 107,
				"display_value2": 0.0392,
				"label": "seed",
				"display_label": "seed",
				"color": "#BCD279"
			},
			{
				"cid": "3_5",
				"value": 26,
				"fraction": 0.25999999999999995,
				"display_value": 1,
				"display_value1": 26,
				"display_value2": 0.009519999999999999,
				"label": "flower",
				"display_label": "flower",
				"color": "#BCD279"
			},
			{
				"cid": "3_6",
				"value": 7,
				"fraction": 0.06999999999999999,
				"display_value": 1,
				"display_value1": 7,
				"display_value2": 0.0025599999999999998,
				"label": "sprout",
				"display_label": "sprout",
				"color": "#BCD279"
			},
			{
				"cid": "3_7",
				"value": 94,
				"fraction": 0.94,
				"display_value": 1,
				"display_value1": 94,
				"display_value2": 0.0344,
				"label": "unknown",
				"display_label": "unknown",
				"color": "#eeeeee"
			}
		]
	},
	{
		"value": 48200,
		"fraction": 482,
		"display_value": 1,
		"cid": 4,
		"display_value1": 48200,
		"display_value2": 17.599999999999998,
		"label": "unknown",
		"color": "#eeeeee",
		"inner": [
			{
				"cid": "4_0",
				"value": 48200,
				"fraction": 482,
				"display_value": 1,
				"display_value1": 48200,
				"display_value2": 17.599999999999998,
				"label": "unknown",
				"display_label": "unknown",
				"color": "#eeeeee"
			}
		]
	}
]

class Taxon extends PureComponent {

	state = {
	}

	componentDidUpdate() {
		console.log('[Taxon.js] -> componentDidUpdate');
	}

	shouldComponentUpdate() {
		console.log('[Taxon.js] -> shouldComponentUpdate');
		return true;
	}

	componentDidMount() {
		console.log('[Taxon.js] -> componentDidMount');
	}

	render() {
		console.log('[Taxon.js] -> render');

		return (
			<React.Fragment>
				<h2>{this.props.match.params.taxonID}</h2>
				<Container fluid>
					<LineChart
						width={400}
						height={400}
						data={pieData}
						margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
					>
						<XAxis dataKey="name" />
						<Tooltip />
						<CartesianGrid stroke="#f5f5f5" />
						<Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
						<Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
					</LineChart>
				</Container>
			</React.Fragment>
		)
	}
}

export default Taxon;
import React, { useContext } from 'react';
import './TaxaExplorer.css';
import { MyContext } from '../../../context/index.js';
import Card from '../../../components/UI/Card';

const TaxaExplorer = (props) => {
	const context = useContext(MyContext);

	console.log("CONTEXT in TAXA EXPLORER: ", context);
	return (
		<Card></Card>
	);
}

export default TaxaExplorer;
import React from 'react';
import './TaxaRow.css';

const TaxaRow = (props) => {
	console.log('TaxaRow= ', props);
	const typeClass = [
		"circle",
		"animal"]
		.join(" ")
		.trim();
	var tax_basename = '';
	if(props.row.taxonomy_color != null) {
		const tax_levels = props.row.taxonomy_color.split(";");
		tax_basename = tax_levels[tax_levels.length - 1];
	}
	var taxonLink = "/taxon/ " + tax_basename;

	return (
		<div className='taxaRow'>
			<div className='custom-class'>
				<div className="dots_hide_text"><b>TID</b>: {props.row.taxon_id}</div>
			</div>
			<div className='custom-class'>
				<div className="dots_hide_text"><b>Taxonomy</b>: {props.row.taxonomy}</div>
			</div>
			<div className='custom-class'>
				<div className="dots_hide_text"><b>Species</b>: {props.row.species}</div>
			</div>
			<div className='custom-class'>
				<div className="dots_hide_text"><b>Genomes</b>: {props.row.ref_genomes}</div>
			</div>
			<div className='custom-class'>
				<div className="dots_hide_text"><b>Culture</b>: {props.row.culture}</div>
			</div>
			<div className='custom-class'>
				<div className="dots_hide_text"><b>Strains</b>: {props.row.allstrains}</div>
			</div>
			<div className='custom-class'>
				<div className="dots_hide_text"><b>Alias</b>: {props.row.aliases}</div>
			</div>
		</div >
	);
}

export default TaxaRow;
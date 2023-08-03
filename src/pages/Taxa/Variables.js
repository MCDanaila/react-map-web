export const ORDER_COLUMNS = [{ text: 'ID', field: 'taxon_id' },
{ text: 'Name', field: 'taxa_name' },
{ text: 'Taxonomy', field: 'taxonomy' },
{ text: '# Samples', field: 'num_samples' },
{ text: 'Tax Detail', field: 'taxonomy_detail' },];

export const SEARCHABLE_FIELDS = [{ text: 'Taxon ID', field: 'taxon_id' },
{ text: 'Taxonomy', field: 'taxonomy' },
{ text: 'Species', field: 'species' },
{ text: 'Genomes', field: 'ref_genomes' },
{ text: 'Strains', field: 'typestrains' },
{ text: 'Aliases', field: 'aliases' },];

export const EXPLORER_CHECKBOXES = [
	{
		title: 'Also Include: ', content: [
			{ value: 'taxa_without_tax', label: 'Taxa without Taxonomy', initState: false },
			{ value: 'taxa_without_env', label: 'Taxa without Environment', initState: false }
		]
	},
	{
		title: 'Only Display: ', content: [
			{ value: 'repr_taxa', label: 'Representative Taxa', initState: false },
			{ value: 'with_species', label: 'With Species', initState: false }
		]
	}
];
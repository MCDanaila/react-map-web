export const ORDER_COLUMNS = [{ text: 'ID', field: 'short_tid' },
{ text: 'Name', field: 'taxa_name' },
{ text: 'Taxonomy', field: 'taxonomy' },
{ text: '# Samples', field: 'num_samples' },
{ text: 'Tax Detail', field: 'taxonomy_detail' },];

export const SEARCHABLE_FIELDS = [{ text: 'ID', field: 'sid' },
{ text: 'Name', field: 'name' },
{ text: 'Keywords', field: 'keywords_clean' },];

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
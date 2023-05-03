export const ORDER_COLUMNS = [{ text: 'ID', field: 'sid_sort' },
{ text: 'Name', field: 'name_sort' }];

export const SEARCHABLE_FIELDS = [{ text: 'ID', field: 'sid' },
{ text: 'Name', field: 'name' },
{ text: 'Keywords', field: 'keywords_clean' },];

export const EXPLORER_CHECKBOXES = [
	{
		title: 'Only Include Samples', content: [{ value: 'taxa_stats', label: 'With taxa', initState: true },
		{ value: 'is_geo', label: 'With Geographic Location', initState: false }]
	},
	{
		title: 'Only Display Samples', content: [{ value: 'publications', label: 'With Publications', initState: false }]
	},
	{
		title: 'Sequencing protocols to Include', content: [
			{ value: 'is_amplicon', label: 'Amplicon', initState: true },
			{ value: 'is_wgs', label: 'Whole Genome Sequencing', initState: true },
			{ value: 'is_rnaseq', label: 'RNA-Seq', initState: true },
			{ value: 'is_sequencing_other', label: 'Other Sequencing Protocols', initState: true }]
	},
	{
		title: 'Regions to Include', content: [
			{ value: 'is_metagenomic', label: 'Metagenomic', initState: true },
			{ value: 'is_genomic', label: 'Genomic', initState: true },
			{ value: 'is_transcriptomic', label: 'Transcriptomic', initState: true },
			{ value: 'is_region_other', label: 'Other Regions', initState: true }]
	}
];
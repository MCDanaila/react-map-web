import React, { Component } from 'react';
import './Taxa.css';
import Introduction from '../../components/Introduction/Introduction';
import Aux from '../../hoc/Aux/Aux';
import TaxaExplorer from './TaxaExplorer/TaxaExplorer';
import TaxaRow from './TaxaRow/TaxaRow';
import axios from '../../axios';
import { Container, Card } from 'react-bootstrap';
// import axios from '../../axios';

class Taxa extends Component {

    state = {
        records: [{
            id: 1,
            culture: "",
            habitats: null,
            level: 97,
            num_samples: 640,
            ref_genomes: "",
            taxa_name: "A16S;90_1003;96_3087;97_3922",
            taxonomy: "Archaea;Euryarchaeota",
            taxonomy_detail: 2
        }, {
            id: 2,
            culture: "",
            habitats: null,
            level: 97,
            num_samples: 640,
            ref_genomes: "",
            taxa_name: "A16S;90_1003;96_3087;97_3922",
            taxonomy: "Archaea;Euryarchaeota",
            taxonomy_detail: 2
        }, {
            id: 3,
            culture: "",
            habitats: null,
            level: 97,
            num_samples: 640,
            ref_genomes: "",
            taxa_name: "A16S;90_1003;96_3087;97_3922",
            taxonomy: "Archaea;Euryarchaeota",
            taxonomy_detail: 2
        }]
    }

    componentDidMount() {
        axios.get("http://devel2.microbeatlas.org/index.html", { action: 'search_taxa', current_page: 0, records_per_page: 50, current_column_sort: 'taxa_name:asc', level: 97 })
            .then(response => {
                // const posts = response.data.slice(0, 10);
                /* const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                }); */
                // this.setState({ posts: updatedPosts });
                console.log(response);
            })
            .catch(error => {
                console.log(error);
                //this.setState({ error: true });
            });
    }

    render() {

        return (
            <Aux>
                <Introduction text={"Some Text"} />
                <Container fluid>
                    <TaxaExplorer />
                    <Card body style={{ width: '98%', textAlign: 'start' }}>
                        <div className='taxa_table_control'>
                            <div className='taxa_table_control_header'>
                                <div className='taxa_table_control_header_left'>
                                    Taxa Results
                                    </div>
                                <div className='taxa_table_control_header_right'>
                                    Found '1K' taxa, displaying '1' to '50'
                                    Pagination
                                    <button>DOWNLOAD</button>
                                </div>
                            </div>
                            <div className='taxa_table_control_content'>
                                <button className='controls_button' onClick={() => alert("order by x")}>Name</button>
                                <button className='controls_button' onClick={() => alert("order by x")}>Taxonomy</button>
                                <button className='controls_button' onClick={() => alert("order by x")}>Genomes</button>
                                <button className='controls_button' onClick={() => alert("order by x")}>Culture</button>
                            </div>
                        </div>
                        {this.state.records.map(row => <TaxaRow key={row.id} row={row} />)}
                    </Card>
                </Container>
                {/* <div className='layout'>
                    <TaxaExplorer />
                    <div className='taxa_results'>
                        <div className='taxa_table_control'>
                            <div className='taxa_table_control_header'>
                                <div className='taxa_table_control_header_left'>
                                    Taxa Results
                                </div>
                                <div className='taxa_table_control_header_right'>
                                    Found '1K' taxa, displaying '1' to '50'
                                    Pagination
                                    <button>DOWNLOAD</button>
                                </div>
                            </div>
                            <div className='taxa_table_control_content'>
                                <button className='controls_button' onClick={() => alert("order by x")}>Name</button>
                                <button className='controls_button' onClick={() => alert("order by x")}>Taxonomy</button>
                                <button className='controls_button' onClick={() => alert("order by x")}>Genomes</button>
                                <button className='controls_button' onClick={() => alert("order by x")}>Culture</button>
                            </div>
                        </div>
                        {this.state.records.map(row => <TaxaRow key={row.id} row={row} />)}
                    </div>
                </div> */}
            </Aux>
        );
    }
}

export default Taxa;
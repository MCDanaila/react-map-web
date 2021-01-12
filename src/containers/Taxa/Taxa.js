import React, { Component } from 'react';
import './Taxa.css';
import Introduction from '../../components/Introduction/Introduction';
import Aux from '../../hoc/Aux/Aux';
import TaxaExplorer from './TaxaExplorer/TaxaExplorer';
import TaxaRow from './TaxaRow/TaxaRow';
import axios from '../../axios';
import { Container, Card, Col, Row, Button, Form } from 'react-bootstrap';
import taxaData from '../../assets/taxa_data.json';
// import axios from '../../axios';
import Pagination from '../../components/Pagination/Pagination';
import OrderButton from '../../components/OrderButton/OrderButton';

const orderColumns = ['Name', 'Taxonomy', 'Genomes', 'Culture'];

class Taxa extends Component {

    state = {
        allTaxa: [],
        currentTaxa: [],
        currentPage: null,
        totalPages: null,
        pageLimit: 20
    }

    componentDidMount() {
        this.setState({ allTaxa: taxaData.data });
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

    shouldComponentUpdate(nextProps, prevProps) {
        return true;
    }

    onPageChanged = data => {
        const { allTaxa } = this.state;
        const { currentPage, totalPages, pageLimit } = data;

        const offset = (currentPage - 1) * pageLimit;
        const currentTaxa = allTaxa.slice(offset, offset + pageLimit);

        this.setState({ currentPage, currentTaxa, totalPages });
    };

    createOrderButtons = () => {
        orderColumns.map(column => <Button variant='outline-secondary' value={column.toLowerCase()} onClick={this.onOrderClick}>{column}</Button>)
    }

    onOrderClick = event => {
        console.log("order by " + event.target.value);
    }

    render() {
        const {
            allTaxa,
            currentTaxa,
            currentPage,
            totalPages,
            pageLimit
        } = this.state;
        const totalCountries = allTaxa.length;

        if (totalCountries === 0) return null;

        const headerClass = [
            "text-dark pr-3 m-0",
            currentPage ? "border-gray border-right" : ""]
            .join(" ")
            .trim();

        return (
            <Aux>
                <Introduction text={"Some Text"} />
                <Container fluid>
                    <Row noGutters>
                        <Col className='px-1' xs={12} md={2}>
                            <TaxaExplorer />
                        </Col>
                        <Col className='px-1' xs={12} md={10}>
                            <Card>
                                <Card.Header>
                                    <div className='taxa_table_control'>
                                        <div className='taxa_table_control_header'>
                                            <div className='taxa_table_control_header_left'>
                                                Taxa Results
                                            </div>
                                            <div className='taxa_table_control_header_right d-flex'>
                                                <div className="d-flex flex-row align-items-center pr-3">
                                                    <div className={headerClass}>
                                                        <strong className="text-secondary">{totalCountries}</strong>{" "}
                                                         Total Taxa
                                                    </div>
                                                    <div className={'ml-2' + headerClass}>
                                                        <select className='mr-1' name="pageLimit" id="pageLimit" onChange={(event) => {
                                                            console.log(event.target.value);
                                                            this.setState({ pageLimit: parseInt(event.target.value) });
                                                            console.log(this.state.pageLimit);
                                                        }}>
                                                            <option value='20'>20</option>
                                                            <option value='50'>50</option>
                                                            <option value='100'>100</option>
                                                            <option value='200'>200</option>
                                                        </select>
                                                        Page Limit
                                                    </div>
                                                    {currentPage && (
                                                        <span className="current-page pl-3 text-secondary">
                                                            Page <span className="font-weight-bold">{currentPage}</span> /{" "}
                                                            <span className="font-weight-bold">{totalPages}</span>
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="d-flex flex-row align-items-center mr-1">
                                                    <Pagination
                                                        totalRecords={totalCountries}
                                                        pageLimit={pageLimit}
                                                        pageNeighbours={1}
                                                        onPageChanged={this.onPageChanged}
                                                    />
                                                </div>
                                                <Button className='download' variant="outline-dark">DOWNLOAD <i class="fa fa-download"></i></Button>
                                            </div>
                                        </div>
                                        <div className='taxa_table_control_content'>
                                            {orderColumns.map(column => <OrderButton order='asc' column={column} onClick={this.onOrderClick} />)}
                                        </div>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    {currentTaxa.map(row => (<TaxaRow key={row.taxa_name} row={row} />))}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Aux>
        );
    }
}

export default Taxa;
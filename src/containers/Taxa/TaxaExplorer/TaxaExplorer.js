import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './TaxaExplorer.css';

const TaxaExplorer = (props) => {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    {/* <div className='explorer2'>
            <div id='taxa_search_header' className='taxa_table_header'>
                <div className='explorer3'><b>Taxa Explorer</b></div>
            </div>
            <div className='explorer4'>
                <textarea id='area_taxa_search' />
                <br />
                <input type='submit' className="search_submit" value="Search Taxa" onClick={() => alert("clicked")} />
                <br /><br />
                <div className='explorer5'><b>Also Include</b></div>
                <div style={{ paddingLeft: '10px' }}>
                    <label className="checkbox_container">
                        Taxa without Taxonomy
                                            <input id="check_taxa_tax" type='checkbox' onClick={() => alert("clicked")} />
                        <span className="checkbox_checkmark" />
                    </label>
                </div>
                <div style={{ paddingLeft: '10px' }}>
                    <label className="checkbox_container">
                        Taxa without Environment
                                            <input id="check_taxa_env" type='checkbox' onClick={() => alert("clicked")} />
                        <span className="checkbox_checkmark" />
                    </label>
                </div>
                <br />
                <div className='explorer5'><b>Examples</b></div>
                <br /><br />
            </div>
        </div> */}
    return (

        <Card body>
            <div className='explorer2'>
                <div id='taxa_search_header' className='taxa_table_header'>
                    <div className='explorer3'><b>Taxa Explorer</b></div>
                </div>
                <div className='explorer4'>
                    <textarea id='area_taxa_search' />
                    <br />
                    <input type='submit' className="search_submit" value="Search Taxa" onClick={() => alert("clicked")} />
                    <br /><br />
                    <div className='explorer5'><b>Also Include</b></div>
                    <div style={{ paddingLeft: '10px' }}>
                        <label className="checkbox_container">
                            Taxa without Taxonomy
                                            <input id="check_taxa_tax" type='checkbox' onClick={() => alert("clicked")} />
                            <span className="checkbox_checkmark" />
                        </label>
                    </div>
                    <div style={{ paddingLeft: '10px' }}>
                        <label className="checkbox_container">
                            Taxa without Environment
                                            <input id="check_taxa_env" type='checkbox' onClick={() => alert("clicked")} />
                            <span className="checkbox_checkmark" />
                        </label>
                    </div>
                    <br />
                    <div className='explorer5'><b>Examples</b></div>
                    <br /><br />
                </div>
            </div>
        </Card>
    );
}

export default TaxaExplorer;
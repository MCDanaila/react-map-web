import React from 'react';
import './TaxaExplorer.css';

const TaxaExplorer = (props) => {
    return (
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
    );
}

export default TaxaExplorer;
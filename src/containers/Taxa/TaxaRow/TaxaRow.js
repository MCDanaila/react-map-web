import React from 'react';
import './TaxaRow.css';

const TaxaRow = (props) => {
    return (

        <div className='taxaRow'>

            <div className='circle animal col' ></div>

            <div className='content'>
                <a href="#"><b> tax_basename </b>: taxa_name_color </a> (num_samples)
            </div>

            <div className='bar'>
                <div className="bar1" data-tooltipped="" aria-describedby="tippy-tooltip-258" data-original-title="80.78%: aquatic"></div>
                <div className="bar2" data-tooltipped="" aria-describedby="tippy-tooltip-259" data-original-title="16.23%: soil"></div>
                <div className="bar3" data-tooltipped="" aria-describedby="tippy-tooltip-260" data-original-title="2.24%: plant"></div>
                <div className="bar4" data-tooltipped="" aria-describedby="tippy-tooltip-261" data-original-title="0.75%: animal"></div>
            </div>




        </div>

    );
}

export default TaxaRow;
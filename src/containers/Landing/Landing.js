import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import './Landing.css';

class Landing extends Component {
    render() {
        return (
            <Aux>
                Hi i'm landing Page!
                <canvas className='background' id='canvas_orange' >
                </canvas>
            </Aux>
        );
    }
}

export default Landing;
import React from 'react';
import './Landing.css';
import PageContent from '../../containers/PageContent/PageContent';
import LeafletMapContainer from '../../containers/LeafletMapContainer/LeafletMapContainer';

const Landing = () => {
	return (
		<PageContent title='Welcome to Landing Page !'>
			<canvas className='background' id='canvas_orange' />
			<LeafletMapContainer markers={[]} />
		</PageContent>
	);
}

export default Landing;
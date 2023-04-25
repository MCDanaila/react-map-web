import React from 'react';
import './Landing.css';
import PageContent from '../../components/PageContent';

const Landing = () => {
	return (
		<PageContent title='Welcome to Landing Page !'>
			<canvas className='background' id='canvas_orange' />
		</PageContent>
	);
}

export default Landing;
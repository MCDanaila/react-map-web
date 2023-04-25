import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Samples from './containers/Samples/Samples';
import Taxa from './containers/Taxa/Taxa';
import Landing from './containers/Landing/Landing';
import SampleGroup from './containers/SampleGroup/SampleGroup';
import MapSeq from './containers/MapSeq/MapSeq';
import About from './containers/About/About';
import MiniDrawer from './pages/MiniDrawer';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MiniDrawer />,
		children: [
			{ path: 'landing', element: <Landing /> },
			{ path: 'taxa', element: <Taxa /> },
			{ path: 'samples', element: <Samples />, },
			{ path: 'sample-groups', element: <SampleGroup />, },
			{ path: 'mapseq', element: <MapSeq />, },
			{ path: 'about', element: <About />, },
		]
	}
]);

function App() {
	console.log('[App.js] -> render');
	return <RouterProvider router={router} />;
}

export default App;

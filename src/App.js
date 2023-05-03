import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MiniDrawer from './containers/MiniDrawer';
import Landing from './pages/Landing/Landing';
import Taxa from './pages/Taxa/Taxa';
import Taxon from './pages/Taxa/Taxon/Taxon'
import Samples from './pages/Samples/Samples';
import Sample from './pages/Samples/Sample/Sample';
import SampleGroup from './pages/SampleGroup/SampleGroup';
import MapSeq from './pages/MapSeq/MapSeq';
import About from './pages/About/About';
import PageContent from './containers/PageContent/PageContent';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
	components: {
		MuiCssBaseline: {
			styleOverrides: `
        body {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column; 
  background: #f6f6f6;
  font-size: 12px !important;
}
      `,
		},
	},
});

const router = createBrowserRouter([
	{
		path: '/',
		element: <MiniDrawer />,
		children: [
			{ path: 'landing', element: <Landing /> },
			{ path: 'taxa', element: <Taxa /> },
			{ path: '/taxa/:tid', element: <Taxon /> },
			{ path: 'samples', element: <Samples />, },
			{ path: '/samples/:sid', element: <Sample /> },
			{ path: 'sample-groups', element: <SampleGroup />, },
			{ path: 'projects', element: <PageContent title='Welcome to Projects Page !' />, },
			{ path: 'publications', element: <PageContent title='Welcome to Publications Page !' />, },
			{ path: 'mapseq', element: <MapSeq />, },
			{ path: 'about', element: <About />, },
		]
	}
]);

function App() {
	console.log('[App.js] -> render');
	return (
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>);
}

export default App;

import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import { Link } from 'react-router-dom';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { ROUTES } from './Routes';
import LogoImg from '../../assets/media/microbeatlas_logo4.png';

function HideOnScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
	});

	return (
		<Slide appear={false} direction="down" in={!trigger} >
			{children}
		</Slide>
	);
}

HideOnScroll.propTypes = {
	children: PropTypes.element.isRequired,
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

/* const lightBlueTheme = createTheme({
	palette: {
		primary: {
			main: '#e3f2fd',
			
		},
		secondary: {
			main: '#2962ff',
		},
	},
}); */
const whiteTheme = createTheme({
	palette: {
		primary: {
			main: '#fff',
		},
		secondary: {
			main: '#d500f9',
		},
	},
});
/* const darkTheme = createTheme({
	palette: {
		primary: {
			main: '#f0f0f0',
		},
		secondary: {
			main: '#f97802',
		},
	},
}); */

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open', })(
	({ theme, open }) => ({
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		...(open && {
			marginLeft: drawerWidth,
			width: `calc(100% - ${drawerWidth}px)`,
			transition: theme.transitions.create(['width', 'margin'], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
		}),
	}));

const Header = (props) => {
	console.log('[Header.js] -> render');
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		console.log(event, newValue);
		setValue(newValue);
	};

	return (
		<ThemeProvider theme={whiteTheme}>
			<HideOnScroll {...props}>
				<AppBar position="fixed" open={props.open} color='primary' >
					<Toolbar>
						<IconButton color="inherit"
							aria-label="open drawer"
							onClick={props.handleDrawerOpen}
							edge="start"
							sx={{ marginRight: 5, ...(props.open && { display: 'none' }), }}>
							<MenuIcon />
						</IconButton>
						<Link className='logoLink' to='/landing' onClick={() => setValue(0)}>
							<img className='logo' src={LogoImg} alt="Microbe Atlas Logo" />
						</Link>
						<Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary" aria-label="nav tabs example">
							{ROUTES.map((route, index) => (
								<Tab key={route.to} icon={route.icon} label={route.text} value={index} to={route.to} component={Link} />
							))}
						</Tabs>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
		</ThemeProvider>
	);
}

export default Header;
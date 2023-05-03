import MapIcon from '@mui/icons-material/Map';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ColorizeIcon from '@mui/icons-material/Colorize';
import Groups3Icon from '@mui/icons-material/Groups3';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import InfoIcon from '@mui/icons-material/Info';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import BiotechIcon from '@mui/icons-material/Biotech';

export const ROUTES = [{ text: 'Landing', to: '/landing', icon: <MapIcon /> },
{ text: 'Taxa', to: '/taxa', icon: <AccountTreeIcon /> },
{ text: 'Samples', to: '/samples', icon: <ColorizeIcon /> },
{ text: 'Samples Groups', to: '/sample-groups', icon: <Groups3Icon /> },
{ text: 'Projects', to: '/projects', icon: <BiotechIcon /> },
{ text: 'Publications', to: '/publications', icon: <LibraryBooksIcon /> },
{ text: 'MAPseq', to: '/mapseq', icon: <DonutLargeIcon /> },
{ text: 'About', to: '/about', icon: <InfoIcon /> }] 
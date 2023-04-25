import React from 'react';
import './Landing.css';
import PageContent from '../../components/PageContent';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
	iconUrl: icon,
	shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const Landing = () => {
	return (
		<PageContent title='Welcome to Landing Page !'>
			{/* <canvas className='background' id='canvas_orange' /> */}
			<MapContainer center={[47.37, 8.54]} zoom={4} scrollWheelZoom={true}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[47.37, 8.54]}>
					<Popup>
						Starting point
					</Popup>
				</Marker>
			</MapContainer>
		</PageContent>
	);
}

export default Landing;
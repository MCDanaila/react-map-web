import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import 'leaflet/dist/leaflet.css'

const LeafletMapContainer = ({ markers }) => {
	return (
		<MapContainer center={[47.37, 8.54]} zoom={4} scrollWheelZoom={true}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<MarkerClusterGroup chunkedLoading>
				{markers.map((address, index) => (
					<Marker
						key={index}
						position={[address[0], address[1]]}
					>
						<Popup>
							{address[2]}
						</Popup>
					</Marker>
				))}
			</MarkerClusterGroup>
		</MapContainer>
	);
}

export default LeafletMapContainer;
import { MapContainer, TileLayer, Marker } from "react-leaflet";

export default function Mapa({ height, width, className, point }) {
  if (height === undefined) {
    height = "25rem";
  }
  if (width === undefined) {
    width = "90%";
  }
  if (className === undefined) {
    className = "o-map";
  }
  if (point === undefined) {
    point = [3.353928, -76.5235276];
  }
  return (
    <MapContainer
      center={point}
      zoom={13}
      scrollWheelZoom={false}
      style={{ width: width, height: height }}
      className={className}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={point}></Marker>
    </MapContainer>
  );
}

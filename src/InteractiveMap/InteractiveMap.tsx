import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./InteractiveMap.css";

const InteractiveMap: React.FC = () => {
  React.useEffect(() => {
    const map = L.map("map").setView([51.505, -0.09], 13);
    
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "Map data © OpenStreetMap contributors",
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map).bindPopup("Marker Popup");

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" className="leaflet-map" />;
};

export default InteractiveMap;

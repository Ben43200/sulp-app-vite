// import React, { useEffect, useRef } from 'react';
// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

// // function MapUpdater() {
// //     const map = useMap();
  
// //     useEffect(() => {
// //       map.invalidateSize();
// //     }, [map]);
  
// //     return null;
// //   }

// export default function MyMapComponent() {
//   const position = [46.16254353471117, 5.002683144174396]; // latitude, longitude

//   return (
//     <MapContainer center={position} zoom={13} className="leaflet-container">
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//       />
//       <Marker position={position}>
//         <Popup>
//           A pretty CSS3 popup. <br /> Easily customizable.
//         </Popup>
//       </Marker>
//     </MapContainer>
//   );
// }






import React, { useEffect, useRef } from 'react';

export default function WoosmapComponent() {
  const mapRef = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sdk.woosmap.com/woosmap.js';
    script.async = true;
  
    window.onload = () => {
      document.body.appendChild(script);
  
      script.onload = () => {
        if (window.W !== undefined) {
          const woosmap = window.W;
          new woosmap.Map({
            key: 'woos-344adabb-bec9-3335-9bae-7b9fa719d90a',
            container: mapRef.current,
            center: [46.16254353471117, 5.002683144174396],
            zoom: 13,
          });
        }
      };
    };
  
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  return <div ref={mapRef} style={{ width: '100%', height: '600px' }} />;
}
import React, { useState, useEffect, useRef } from 'react';
import ReactMapGL from 'react-map-gl';

const TalentMap = () => {
  const [viewport, setViewport] = useState({
    latitude: 20.587831,
    longitude: -100.388029,
    zoom: 12,
    bearing: 0,
    pitch: 0,
  });

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="100%"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    />
  );
};

export default TalentMap;

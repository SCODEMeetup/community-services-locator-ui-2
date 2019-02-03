import React from 'react'
import PropTypes from 'prop-types'
import mapboxgl from 'mapbox-gl'
import { connect } from 'react-redux'

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

let Map = class Map extends React.Component {
  map;

  static propTypes = {
    data: PropTypes.object.isRequired,
    active: PropTypes.object.isRequired
  };

  componentDidUpdate() {
    this.setFill();
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/dark-v9',
      zoom: 12,
      center: [-83.004252,39.960529]
    });

    this.map.on('load', () =>{
      this.map.addLayer({
        'id': 'population',
        'type': 'circle',
        'source': {
          type: 'vector',
          url: 'mapbox://smrtcbus.9n1znhht'
        },
        'source-layer': 'pantries-a2zfdr',
        'paint': {
        // make circles larger as the user zooms from z12 to z22
          'circle-radius': {
            'base': 1.75,
            'stops': [[12, 2], [22, 180]]
        },
        // color circles by ethnicity, using a match expression
        // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
        'circle-color': '#fbb03b'
      }
    });
  });
}

  render() {
    return (
      <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
    active: state.active
  };
}

Map = connect(mapStateToProps)(Map);

export default Map;

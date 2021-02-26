import React from 'react';
import PropTypes from 'prop-types';

function Hotel (props) {
  return(
    <>
    <div className = 'card' id = 'hotelEntry'>
      <div className = 'row'>
        <div onClick = {() => props.whenHotelClicked(props.id)}>
          <h3>{props.name}</h3>
          <h4>{props.location}</h4>
          <p>{props.reviews}</p>
        </div>
      </div>
    </div>
    </>
  );
}

Hotel.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  reviews: PropTypes.string,
  id: PropTypes.string,
  whenHotelClicked: PropTypes.func
};

export default Hotel;
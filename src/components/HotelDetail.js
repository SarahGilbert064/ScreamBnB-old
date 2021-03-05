import React from "react";
import PropTypes from 'prop-types';

function HotelDetail(props) {
  const { hotel, onClickingDelete } = props;

  return(
    <>
    <h1>Hotel Details</h1>
    <h3>{hotel.name}</h3>
    <h3>{hotel.location}</h3>
    <p><em>{hotel.reviews}</em></p>
    <br></br>
    <button onClick = { props.onClickingEdit }>Update Hotel Info/Review</button>
    <button onClick ={() => onClickingDelete(hotel.id)}>Delete Hotel/Review?</button>
    </>
  );
}

HotelDetail.propTypes = {
  hotel: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default HotelDetail;
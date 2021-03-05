import React from 'react';
import Hotel from './Hotel';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';

function HotelList(props) {

  useFirestoreConnect([
    { collection: 'hotels' }
  ]);

  const hotels = useSelector(state => state.firestore.ordered.hotels);

  if(isLoaded(hotels)) {
    return(
      <>
        <hr/>
          {hotels.map((hotel) => {
            return <Hotel
              whenHotelClicked = { props.onHotelSelection }
              name = { hotel.name }
              location = { hotel.location }
              review = { hotel.review }
              id = { hotel.id }
              key = { hotel.id }/>
          })}
        <hr></hr>
      </>
    );
  } else {
    return (
      <>
      <h3>Loading....</h3>
      </>
    )
  }
}

HotelList.propTypes = {
  onHotelSelection: PropTypes.func
};

export default HotelList;
import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';

function EditHotelForm (props) {
  const { hotel } = props;
  const firestore = useFirestore();

  function handleEditHotelFormSubmission(event) {
    event.preventDefault();
    props.onEditHotel();
    const propertiesToUpdate = {
      name: event.target.name.value,
      location: event.target.location.value,
      review: event.target.location.value,
    }
    return firestore.update({ collection: 'hotels', doc: hotel.id }, propertiesToUpdate)
  }

  return(
    <>
    <ReusableForm
      formSubmissionHandler = { handleEditHotelFormSubmission }
      buttonText = "Update Hotel"/>
    </>  
  );
}

EditHotelForm.propTypes = {
  hotel: PropTypes.object,
  onEditHotel: PropTypes.func 
};

export default EditHotelForm;
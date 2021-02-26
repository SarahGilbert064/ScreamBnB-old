import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';
import { useFirestore } from 'react-redux-firebase';

function NewHotelForm(props) {

  const firestore = useFirestore();

  function addHotelToFirestore(event) {
    event.preventDefault();
    props.onNewHotelCreation();

    return firestore.collection('hotels').add(
      {
        name: event.target.name.value,
        location: event.target.location.value,
        review: event.target.review.value,
        timeOpen: firestore.FieldValue.serverTimestamp()
      }  
    );
  }

  return (
    <>
      <ReusableForm
        formSubmissionHandler= {addHotelToFirestore}
        buttonText='Add Hotel'/>
    </>
  );
}

NewHotelForm.propTypes = {
  onNewHotelCreation: PropTypes.func
};

export default NewHotelForm;
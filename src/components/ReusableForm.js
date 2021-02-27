import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input 
          type='text'
          name='name'
          placeholder="Hotel Name"/>
        <br></br>
        <input
          type='text'
          name='location'
          placeholder='Hotel Location'/>
        <br></br>  
        <input
          type='text'
          name='review'
          placeholder='Give it a Reveiw'/>
        <br></br> 
        <button type='submit'>{props.buttonText}</button>
        <br></br>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string 
};

export default ReusableForm;
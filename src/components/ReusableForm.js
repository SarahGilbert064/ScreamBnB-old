import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <>
      <center>
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
          <textarea name='review' cols="40" rows="5"> 
          <input
            type='text'
            placeholder='Give it a Reveiw'/>
          </textarea> 
          <br></br> 
          <button type='submit'>{props.buttonText}</button>
          <br></br>
        </form>
      </center>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string 
};

export default ReusableForm;
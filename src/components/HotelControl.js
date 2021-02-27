import React from 'react';
import NewHotelForm from './NewHotelForm';
import HotelList from './HotelList';
import HotelDetail from './HotelDetail';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { withFirestore, isLoaded } from 'react-redux-firebase';

class HotleControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedMemory: null,
      
    };
  }

  handleAddingNewHotelToList = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }
}
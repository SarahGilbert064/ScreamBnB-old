import React from 'react';
import NewHotelForm from './NewHotelForm';
import HotelList from './HotelList';
import HotelDetail from './HotelDetail';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import Hotel from './Hotel';

class HotleControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedMemory: null,
      editing: false
    };
  }

  handleAddingNewHotelToList = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }

  handleChangingSelectedHotel = (id) => {
    this.props.withFirestore
    .get({collection: 'hotels', doc: id})
    .then((memory)  => {
      const firestoreHotel = {
        name: hotel.get('name'),
        location: hotel.get('location'),
        review: hotel.get('review'),
        id: hotel.id
      }
      this.setState({selectedHotel: firestoreHotel});
    });
  }

  handleDeletingHotel = (id) => {
    this.props.firestore.delete({collection: 'hotels', doc: id});
    this.setState({selectedHotel: null});
  }

  handleEditClick = () => {
    this.setState({
      editing: true 
    });
  }

  handleEditingHotelInList = () => {
    this.setState({
      editing: false,
      selectedHotel: null 
    });
  }

  
}
import React from 'react';
import NewHotelForm from './NewHotelForm';
import HotelList from './HotelList';
import HotelDetail from './HotelDetail';
import EditHotelForm from './EditHotelForm';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import * as a from './../actions';


class HotelControl extends React.Component {

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
    .then((hotel)  => {
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

  handleClick = () => {
    if (this.state.selectedHotel != null) {
      this.setState({
        selectedHotel: null,
        editing: false 
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  render() {
    const auth = this.props.firebase.auth();
    if(!isLoaded(auth)) {
      return (
        <>
        <h1>Loading...</h1>
        </>
      )
    }
    if((isLoaded(auth)) && (auth.currentUser == null)) {
      return (
        <>
        <h4><center>You must be signed in to access ScreamBnB</center></h4>
        </>
      )
    }
    if((isLoaded(auth)) && (auth.currentUser != null)) {
      let currentlyVisibleState = null;
      let buttonText = null;

      if (this.state.editing) {
        currentlyVisibleState =
        <EditHotelForm
        hotel = {this.state.selectedHotel}
        onEditHotel = {this.handleEditingHotelInList} />
        buttonText = "Return to Hotel List";
      } else if (this.state.selectedHotel != null) {
        currentlyVisibleState =
        <HotelDetail
        hotel = {this.state.selectedHotel}
        onClickingDelete = {this.handleDeletingHotel}
        onClickingEdit = {this.handleEditClick}/>
        buttonText = 'Return to Hotel List';
      } else if (this.props.formVisibleOnPage) {
        currentlyVisibleState =
        <NewHotelForm
        onNewHotelCreation = {this.handleAddingNewHotelToList}
        onEditHotel = {this.handleEditingHotelInList}/>
        buttonText = "Return to Hotel List";
      } else {
        currentlyVisibleState =
        <HotelList
        hotelList = {this.props.masterHotelList}
        onMemorySelection = {this.handleChangingSelectedHotel}/>
        buttonText = 'Add Hotle';
      }

      return(
        <>
        {currentlyVisibleState}
        <button style ={{marginLeft: '45%'}} onClick = {this.handleClick}>{buttonText}</button>
        </>
      );
    }
  }
}

HotelControl.propTypes = {
  formVisibleOnPage: PropTypes.bool 
}

const mapStateToProps = state => {
  return {
    formVisibleOnPage: state.formVisibleOnPage
  }
}

HotelControl = connect(mapStateToProps)(HotelControl);

export default withFirestore(HotelControl);
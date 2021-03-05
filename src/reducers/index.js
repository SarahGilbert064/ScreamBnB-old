import formVisibleReducer from './form-visible-reducer';
import hotelListReducer from './hotel-list-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterHotelList: hotelListReducer,
  firestore: firestoreReducer
});

export default rootReducer;
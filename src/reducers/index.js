import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  // formVisibleOnPage: formVisibleReducer,
  // masterTicketList: ticketListReducer,
  firestore: firestoreReducer
});

export default rootReducer;
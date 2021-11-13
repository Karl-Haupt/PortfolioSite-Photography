import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { authReducer } from "./Redux/Reducers/userReducers";
import { mediaReducer, newMediaReducer, mediaDetailsReducer } from "./Redux/Reducers/mediaReducer";

const reducer = combineReducers({
  auth: authReducer,
  medias: mediaReducer,
  newMedia: newMediaReducer,
  mediaDetails: mediaDetailsReducer
});

const middleware = [thunk];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

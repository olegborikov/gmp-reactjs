import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(thunk));

const initial = {
  movies: {
    data: [],
    totalAmount: 0
  },
  error: null,
  currentGenre: "All",
  currentParameter: "TITLE",
  currentOrder: "ASC"
};

const store = createStore(
  reducer,
  initial,
  enhancers
);

export default store;
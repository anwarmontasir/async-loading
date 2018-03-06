import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { notes } from '../components/notes/reducers';
import { commentsByNote } from '../components/comments/reducers';
import { loading, error } from '../components/app/reducers';
import promiseMiddleware from './promiseMiddleware';

const reducer = combineReducers({
  notes,
  commentsByNote,
  loading,
  error
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(
      thunk,
      promiseMiddleware
    )
  )
);

export default store;
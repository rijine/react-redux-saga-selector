import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducer';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
  applyMiddleware(logger)
);

sagaMiddleware.run(rootSaga);

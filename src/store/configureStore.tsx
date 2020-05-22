/**
 * Configures store with reducers and middlewares.
 */
import { createStore, applyMiddleware } from 'redux';
import rootReducers from '../reducers';
import createSagaMiddleware from 'redux-saga';
import { bucketsSaga } from '../sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducers,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(bucketsSaga);

export default store;
import { applyMiddleware, combineReducers, createStore } from 'redux';

import HeroReducer from './reducers/heroReducer';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import TeamReducer from './reducers/teamReducer';
import LogInReducer from './reducers/loginReducer';

const RootReducer = combineReducers({

  heros: HeroReducer,
  team: TeamReducer,
  log: LogInReducer,

})

export default createStore(RootReducer, applyMiddleware(thunk,promise))
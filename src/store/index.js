import { applyMiddleware, combineReducers, createStore } from 'redux';

import HeroReducer from './reducers/heroReducer';
import LogInReducer from './reducers/loginReducer';
import PokesReducer from './reducers/pokesReducer';
import TeamReducer from './reducers/teamReducer';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

const RootReducer = combineReducers({

  heros: HeroReducer,
  pokes: PokesReducer,
  team: TeamReducer,
  log: LogInReducer,

})

export default createStore(RootReducer, applyMiddleware(thunk,promise))
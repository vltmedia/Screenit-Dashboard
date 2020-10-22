import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import Settings from './Settings';
import Auth from './Auth';
import Screenit from './Screenit';
import Common from './Common';


export default (history) => combineReducers({
  router: connectRouter(history),
  settings: Settings,
  screenit: Screenit,
  auth: Auth,
  common: Common,
});

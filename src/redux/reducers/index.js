import { combineReducers } from 'redux';
import nav from './nav';
import user from './user';
import pages from './pages';
import blogs from './blogs';

export default combineReducers({
  nav,
  user,
  pages,
  blogs,
});

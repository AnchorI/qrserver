import {combineReducers} from 'redux';
import ClientReducers from './client'
const allReducers = combineReducers({
    client: ClientReducers
});

export default allReducers;
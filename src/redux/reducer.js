import * as Constants from '../constants'
import data from '../data.json'

const options = [{
  name: 'Services',
  description: 'A Variety of services for civic needs in Columbus, OH',
  geometry: 'coordinates'
}]

const initialState: State = {
  data,
  options,
  active: options[0]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case Constants.SET_ACTIVE_OPTION:
      return Object.assign({}, state, {
        active: action.option
      });
    default:
      return state;
  }
}

export { reducer, initialState };

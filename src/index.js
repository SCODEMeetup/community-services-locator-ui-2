import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { store } from './redux/store'
import Map from './components/map'

class Application extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Map />
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<Application />, document.getElementById('app'));

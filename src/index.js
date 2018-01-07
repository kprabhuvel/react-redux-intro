import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Counter from './Counter';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };  
    default:
      return state;
  }
}

const store = createStore(reducer);

const MainApp = () => (
    <div>
      <Provider  store={store}>
        <Counter />
      </Provider>
    </div>
  );

ReactDOM.render(<MainApp />, document.getElementById('root'));
registerServiceWorker();

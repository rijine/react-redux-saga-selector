import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Example } from './Example';
import { store } from './store';
import { Counter } from './Counter';
const action = type => store.dispatch({ type });

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Counter
          value={store.getState().count}
          onIncrement={() => action('INCREMENT')}
          onDecrement={() => action('DECREMENT')}
          onIncrementAsync={() => action('INCREMENT_ASYNC')}
        />
        <Example />
      </div>
    </Provider>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('app'));

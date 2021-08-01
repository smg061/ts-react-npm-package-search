import React from 'react';
import {Provider} from 'react-redux';
import {store} from './state';
import RepositoriesList from './components/RepositoriesList';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>NPM package search</h1>
        <RepositoriesList/>
      </div>
    </Provider>

  );
}

export default App;

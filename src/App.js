import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import store from './Store/Store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
      </div>
    </Provider>
  );
}

export default App;

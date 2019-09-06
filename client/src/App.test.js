import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';
import Navbar from './components/NavBar'


test('App renders without crashing', () => {
  render(<App />);
});

test('contains Title Nav', () => {
  const { getByText }  = render(<Navbar />);
  getByText("Female World Cup Winners");

});

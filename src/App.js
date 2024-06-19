import React from 'react';
import Dashboard from './components/Dashboard';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1 style={{color:'white',backgroundColor:'black'}}><i className="fa-brands fa-spotify" style={{color: '#3bd855'}}></i> Spotify Dashboard</h1>
      <Dashboard />
    </div>
  );
};

export default App;
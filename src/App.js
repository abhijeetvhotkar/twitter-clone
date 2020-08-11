import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed.js';
import Widgets from './Widgets.js';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      {/* Feed */}
      <Feed/>
      {/* Widgets */}
      <Widgets/>
    </div>
  );
}

export default App;

import React from 'react';
import Navbar from './Navbar';
import Login from './Login';
 

import Home from './Home';

function App() {
 
  
  return (
    <div className="App">

       <Navbar />
      <div className="content">
       
        <Home />
        <Login />
      </div>


 
  
    </div>
  );
}

export default App;

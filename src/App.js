import React from 'react';
import './App.css';
 import UseStateErrorEx from './tutorial/useStateErrorEx';
 import UseStateBasics from './tutorial/UseStateBasics';
 import UseStateArray from './tutorial/UseStateArray';
function App() {
  return ( <div className="container">
  <h2>Advance react JS</h2>
  {/* <UseStateBasics/> */}
  <UseStateArray/>
  {/* <UseStateErrorEx/> */}
  </div>
  );
}

export default App;

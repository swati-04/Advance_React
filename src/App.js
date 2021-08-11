import React from 'react';
import './App.css';
import UseStateCounter from './tutorial/UseStateCounter';
// import UseStateErrorEx from './tutorial/useStateErrorEx';
// import UseStateBasics from './tutorial/UseStateBasics';
//import UseStateArray from './tutorial/UseStateArray';
import UseStateObject from './tutorial/UseStateObject';
function App() {
  return (<div className="container">
    <h2>Advance react JS</h2>
    {/* <UseStateBasics/> */}
    {/* <UseStateArray /> */}
    <UseStateObject />
    <UseStateCounter />

    {/* <UseStateErrorEx/> */}
  </div>
  );
}

export default App;

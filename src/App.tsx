import React from 'react';
import './App.css';

import "preline/preline";
import { IStaticMethods } from "preline/preline";
import Router from "./router";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

function App() {
  return (
    <>
      <div className='App'>
        <Router/>
      </div>
    </>
  );
}

export default App;

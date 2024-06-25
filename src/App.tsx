import React, {useEffect} from 'react';
import "preline/preline";
import { IStaticMethods } from "preline/preline";
import Router from "./router";
import {useLocation} from "react-router-dom";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

function App() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);
  return (
    <>
      <div className='container mx-auto my-auto'>
        <Router/>
      </div>
    </>
  );
}

export default App;

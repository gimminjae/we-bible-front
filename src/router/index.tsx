import {Route, Routes, useLocation} from 'react-router-dom'
import {RouterPages} from "./RouterPages";
import {useEffect} from "react";

import "preline/preline";
import { IStaticMethods } from "preline/preline";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

function RootRouter() {
  const location = useLocation();

  useEffect(() => {
    require('preline/preline');
  }, []);

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);
  return (
    <Routes>
      {
        RouterPages.map(page =>
          <Route path={page.path} element={page.page}/>
        )
      }
    </Routes>
  )
}

export default RootRouter

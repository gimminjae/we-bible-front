import React from 'react';
import './App.css';
import { useEffect } from 'react';
import {BrowserRouter, Link, useLocation} from 'react-router-dom';

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
    <BrowserRouter>
      <>
        <div className='App'>
          <nav style={{display: "flex", gap: '30px'}}>
            <Link to="/">홈</Link>
            |
            <Link to="/sign-up">회원가입</Link>
            |
            <Link to="/sign-in">로그인</Link>
          </nav>
          <Router/>
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;

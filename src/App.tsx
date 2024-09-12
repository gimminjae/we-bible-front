import React, {createContext, useEffect, useState} from "react"
import Router from "./router"
import { useLocation } from "react-router-dom"
import useHeader from "./hooks/useHeader";
import { HeaderContext } from "./store/context/HeaderContext";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

function App() {
  const location = useLocation()

  const [header, setHeader] = useState('initial header')

  return (
    <>
      <HeaderContext.Provider value={{ header, setHeader }}>
        <Header/>
        <div className="container mx-auto my-auto">
          <Router/>
        </div>
        <Footer/>
      </HeaderContext.Provider>
    </>
  )
}

export default App

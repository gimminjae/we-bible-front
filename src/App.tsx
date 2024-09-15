import React, { useState } from "react"
import Router from "./router"
import { useLocation } from "react-router-dom"
import { HeaderContext } from "./store/context/HeaderContext"
import Header from "./components/layouts/Header"
import Footer from "./components/layouts/Footer"
import { CookiesProvider } from "react-cookie"

function App() {
  const location = useLocation()

  const [header, setHeader] = useState("initial header")

  return (
    <>
      <CookiesProvider>
        <HeaderContext.Provider value={{ header, setHeader }}>
          <Header />
          <div className="container mx-auto my-auto">
            <Router />
          </div>
          <Footer />
        </HeaderContext.Provider>
      </CookiesProvider>
    </>
  )
}

export default App

import React, { useState } from "react"
import Router from "./router"
import { HeaderContext } from "./store/context/HeaderContext"
import Header from "./components/layouts/Header"
import Footer from "./components/layouts/Footer"
import { CookiesProvider } from "react-cookie"

function App() {
  const [header, setHeader] = useState("initial header")

  return (
    <>
      <CookiesProvider>
        <HeaderContext.Provider value={{ header, setHeader }}>
          <Header className="relative h-[7vh]" />
          <div className="mt-[9vh] container mx-auto my-auto">
            <Router />
          </div>
          <Footer />
        </HeaderContext.Provider>
      </CookiesProvider>
    </>
  )
}

export default App

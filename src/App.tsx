import React, { useEffect } from "react"
import Router from "./router"
import { useLocation } from "react-router-dom"

function App() {
  const location = useLocation()

  return (
    <>
      <div className="container mx-auto my-auto">
        <Router />
      </div>
    </>
  )
}

export default App

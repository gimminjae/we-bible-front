import { Route, Routes, useLocation } from "react-router-dom"
import { RouterPages } from "./RouterPages"
import { useEffect } from "react"

function RootRouter() {
  const location = useLocation()

  return (
    <Routes>
      {RouterPages.map((page) => (
        <Route path={page.path} element={page.page} />
      ))}
    </Routes>
  )
}

export default RootRouter

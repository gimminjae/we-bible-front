import { Route, Routes, useLocation } from "react-router-dom"
import { RouterPages } from "./RouterPages"
import { useEffect } from "react"

function RootRouter() {
  return (
    <Routes>
      {RouterPages.map((page, idx) => (
        <Route path={page.path} key={idx} element={page.page} />
      ))}
    </Routes>
  )
}

export default RootRouter

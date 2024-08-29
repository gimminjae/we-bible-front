import React, { ReactNode } from "react"
import BibleViewPage from "../pages/bible/BibleViewPage"

const Home = () => <div>Home Page</div>
type Page = {
  path: string
  page: ReactNode
}
export const RouterPages: Page[] = [
  {
    path: "/",
    page: <Home />,
  },
  {
    path: "/bible-page",
    page: <BibleViewPage />,
  },
]

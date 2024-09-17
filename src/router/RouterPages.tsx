import React, { ReactNode } from "react"
import BibleViewPage from "../pages/bible/BibleViewPage"
import MyViewPage from "../pages/my/MyViewPage"
import SettingViewPage from "../pages/setting/SettingViewPage"

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
  {
    path: "/my-page",
    page: <MyViewPage />,
  },
  {
    path: "/setting-page",
    page: <SettingViewPage />,
  },
]

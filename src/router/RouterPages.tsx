import { ReactNode } from "react"
import BibleViewPage from "../pages/bible/BibleViewPage"
import MyViewPage from "../pages/my/MyViewPage"
import SettingViewPage from "../pages/setting/SettingViewPage"
import TestPage from "../pages/test/TestPage"
import SignUpPage from "../pages/member/SignUpPage"

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
  {
    path: "/test-page",
    page: <TestPage />,
  },
  {
    path: "/sign-up",
    page: <SignUpPage />,
  },
]

import React, {ReactNode} from "react";
import SignUpPage from "../pages/member/SignUpPage";
import SignInPage from "../pages/member/SignInPage";
import ForgotPassword from "../pages/member/ForgotPassword";


const Home = () => <div>Home Page</div>
type Page = {
  path: string,
  page: ReactNode
}
export const RouterPages: Page[] = [
  {
    path: '/',
    page: <Home />
  },
  {
    path: '/sign-in',
    page: <SignInPage />
  },
  {
    path: '/sign-up',
    page: <SignUpPage />
  },
  {
    path: '/forgot-password',
    page: <ForgotPassword />
  }
]
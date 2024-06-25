import {ReactNode} from "react";


const Home = () => <div>Home Page</div>
const SignIn = () => <div>sign in</div>
const SignUp = () => <div>sign up</div>
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
    page: <SignIn />
  },
  {
    path: '/sign-up',
    page: <SignUp />
  }
]
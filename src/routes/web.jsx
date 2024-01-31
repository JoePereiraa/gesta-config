import { createBrowserRouter } from "react-router-dom"

import App from '../App';
import { Home } from "../pages/Home/index.tsx"
import { Login } from "../pages/Login/index.tsx"
import { ErrorPage } from "../pages/Error/404"

export const ROUTES = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home/>
        },
      ]
    },
    {
      path: '/login',
      element: <Login/>
    }
  ])
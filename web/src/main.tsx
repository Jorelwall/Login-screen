import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignIn from '../src/pages/SignIn'
import SignUp from '../src/pages/SignUp'

const router = createBrowserRouter([
  { 
    path: '/signin',
    element: <SignIn />
  },
  {
    path: '/Signup',
    element: <SignUp/>
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

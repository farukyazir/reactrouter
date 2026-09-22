import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/contact'
import Error from './components/error'
import Welcomemsg from './components/Welcomemsg'
import Template from './components/Template'

const App = () => {
 const router = createBrowserRouter([
  {
    path:"/",
    element:<Template/>,
    children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/services",
      element:<Services/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/*",
      element:<Error/>
    },
    {
      path:"/welcome/:username",
      element:<Welcomemsg/>
    }
    ]
  }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App

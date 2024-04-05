import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Signup from './pages/Signup'

// redux
import { store } from './app/store'
import { Provider } from 'react-redux'

// chakra
import { ChakraProvider } from '@chakra-ui/react'


// react-router
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router  = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
  },
  {
    path:'/signup',
    element:<Signup/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <RouterProvider router = {router}/>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
)

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
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'


const router  = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
  },
  {
    path:'/signup',
    element:<Signup/>,
  },
  {
    path : "/home",
    element : <Home/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <Header />
        <RouterProvider router = {router}/>
        <Footer />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
)

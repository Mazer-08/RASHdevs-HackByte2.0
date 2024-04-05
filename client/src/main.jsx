import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// redux
import { store } from './app/store'
import { Provider } from 'react-redux'


// react-router
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router  = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
  },
  {
    path:'/hehe',
    element:<>hehe</>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router = {router}/>
    </Provider>
  </React.StrictMode>,
)

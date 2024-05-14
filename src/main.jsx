import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/error-page/index.jsx'
import Flight from './components/flight-details/index.jsx'
import SearchAppBar from './components/navbar/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'flights/:id',
    element: <Flight />,
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchAppBar />
    <RouterProvider router={router} />
  </React.StrictMode>
)

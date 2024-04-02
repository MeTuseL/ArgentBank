import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import ErrorPage from './pages/ErrorPage'
import Layout from './components/Layout'
import Profile from './pages/Profile'
import { Provider } from 'react-redux'
import store from './__store__/store'

/**
 * Main entry point for the Argent Bank application.
 *
 * This script sets up the application's routing and state management
 * using React Router and Redux.
 *
 * @category Router
 */

// Create the application's routing configuration
const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Layout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: 'login',
                    element: <Login />,
                },
                {
                    path: 'profile',
                    element: <Profile />,
                },
            ],
        },
    ],
    {
        basename: '/ArgentBank',
    }
)
// Render the application with Redux Provider and Router Provider
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
)

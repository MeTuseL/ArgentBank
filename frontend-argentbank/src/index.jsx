import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Layout from './components/Layout'
import Profile from './pages/Profile'
import { Provider } from 'react-redux'
import store from './__store__/store'

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Layout />,
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

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
)

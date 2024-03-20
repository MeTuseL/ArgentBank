import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Footer from './components/Footer'
import Profile from './pages/Profile'
import { Provider } from 'react-redux'
import store from './__store__/store'

const router = createBrowserRouter([
    // {
    //     basename: '/ArgentBank',
    // },
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/profile',
        element: <Profile />,
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
            <Footer />
        </Provider>
    </React.StrictMode>
)

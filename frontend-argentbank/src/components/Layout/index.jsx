import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Header />
            <Outlet /> {/* Nested routes render here */}
            <Footer />
        </>
    )
}
export default Layout

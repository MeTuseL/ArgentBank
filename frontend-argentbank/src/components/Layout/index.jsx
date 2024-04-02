import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

/**
 * Component representing a layout with a header, footer, and an outlet containing nested routes.
 *
 * @category Components
 * @component
 * @returns  { JSX.Element } A React component that renders a layout with a header, footer, and an outlet containing nested routes.
 */
function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
export default Layout

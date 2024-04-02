import { Link } from 'react-router-dom'
import logo from '../../../assets/logo/argentBankLogo.png'
import { useSelector, useDispatch } from 'react-redux'
import { selectUserInfos } from '../../../__features__/userInfos'
import { logOutUser } from '../../../__features__/userInfos'

/**
 * Component representing a header.
 *
 * @category Layout
 * @component
 * @returns  { JSX.Element } A React component that renders a header.
 */
function Header() {
    // Get the user state to manage the header display type when the user is logged in or not
    const user = useSelector(selectUserInfos)
    // Update the state when the user logs out
    const dispatch = useDispatch()
    return (
        <>
            <nav className="main-nav">
                <Link to={'/'} className="main-nav-logo">
                    <img
                        className="main-nav-logo-image"
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                {user.connected === true ? (
                    <div>
                        <Link to={'/profile'} className="main-nav-item">
                            <i className="fa fa-user-circle"></i>
                            {user.firstName}
                        </Link>
                        <Link
                            to={'/'}
                            onClick={() => dispatch(logOutUser())}
                            className="main-nav-item"
                        >
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </Link>
                    </div>
                ) : (
                    <div>
                        <Link to={'/login'} className="main-nav-item">
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </Link>
                    </div>
                )}
            </nav>
        </>
    )
}
export default Header

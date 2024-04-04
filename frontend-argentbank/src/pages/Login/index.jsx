import { useEffect, useState } from 'react'
import apiService from '../../__services__/apiService'
import { useNavigate } from 'react-router-dom'
import FieldError from '../../components/FieldError'
import { useDispatch, useSelector } from 'react-redux'
import {
    loginUserInfos,
    tokenUser,
    selectRememberUser,
    rememberUser,
} from '../../__features__/userInfos'

/**
 * Component representing a login page.
 *
 *  This component allows users to log in with their username and password.
 * It handles form submission, field validation, and 'remember me' functionality.
 *
 * @category Pages
 * @component
 * @returns  { JSX.Element } A React element that renders a login page.
 */
function Login() {
    document.title = 'Argent Bank - Login'
    const userRemember = useSelector(selectRememberUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loading, setIsLoading] = useState(false)
    const [userInfos, setUserInfos] = useState({ username: '', password: '' })
    const [msgErrorUsername, setMsgErrorUsername] = useState('')
    const [msgErrorPassword, setMsgErrorPassword] = useState('')
    const [msgErrorUser, setMsgErrorUser] = useState('')
    const [isChecked, setISChecked] = useState(false)
    const [shouldUpdate, setSouldUpdate] = useState(true)

    // Function to control email format
    const controlEmail = (email) => {
        // Regex pattern for email validation
        const reEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
        return reEmail.test(email)
    }
    // Function to control username format
    const constrolUsername = (username) => {
        if (username === '') {
            setMsgErrorUsername('Empty fields.')
            return false
        } else if (controlEmail(username) === false) {
            setMsgErrorUsername('Invalid email address.')
            return false
        }
        return true
    }
    // Function to control password format
    const controlPassword = (password) => {
        if (password === '') {
            setMsgErrorPassword('Empty fields.')
            return false
        }
        return true
    }
    // Function to handle login submission
    const login = (e) => {
        e.preventDefault()
        setMsgErrorUsername('')
        setMsgErrorPassword('')
        setMsgErrorUser('')
        // Fetch data if the username and password are correct; otherwise, display an error message.
        if (
            constrolUsername(userInfos.username) &&
            controlPassword(userInfos.password)
        ) {
            apiService
                .loginUser(userInfos)
                .then((token) => {
                    if (token.error) {
                        setMsgErrorUser(
                            'Sorry, the email address or password you entered is incorrect. Please check and try again.'
                        )
                    } else {
                        dispatch(tokenUser(token.success))
                        dispatch(rememberUser(isChecked))
                        if (isChecked) {
                            // Store email of user for 'remember me'
                            localStorage.setItem(
                                'username',
                                JSON.stringify(userInfos.username)
                            )
                        }
                        apiService
                            .readProfileUser(token.success.token)
                            .then((dataUser) => {
                                dispatch(loginUserInfos(dataUser.success))
                                navigate('/profile')
                            })
                            .finally(() => setIsLoading(true))
                    }
                })
                .finally(() => setIsLoading(false))
        } else {
            constrolUsername(userInfos.username)
            controlPassword(userInfos.password)
        }
    }
    // Function to handle field changes
    const onFieldChange = (e) => {
        const { name, value } = e.target
        const userInfos_ = { ...userInfos }
        userInfos_[name] = value
        setUserInfos(userInfos_)
    }
    // Function to handle 'remember me' checkbox
    const onChecked = (e) => {
        const { checked } = e.target
        if (!checked && localStorage.getItem('username')) {
            localStorage.removeItem('username')
        }
        setISChecked(checked)
    }
    // Retrieve the username stored in local storage for the 'remember me' functionality
    useEffect(() => {
        if (shouldUpdate) {
            const saveUser = localStorage.getItem('username')
            if (saveUser && userRemember.checked === true) {
                const userInfos_ = { ...userInfos }
                userInfos_.username = saveUser.replace(/["']/g, '') //regex for remove `"` or `'`
                setUserInfos(userInfos_)
                setISChecked(userRemember.checked)
                setSouldUpdate(false)
            }
        }
    }, [userRemember, userInfos, shouldUpdate])

    return (
        <>
            {loading === true ? (
                <main className="main bg-dark">
                    <section className="sign-in-content">
                        <h2>Loading...</h2>
                    </section>
                </main>
            ) : (
                <main className="main bg-dark">
                    <section className="sign-in-content">
                        <i className="fa fa-user-circle sign-in-icon"></i>
                        <h1>Sign In</h1>
                        <form onSubmit={login}>
                            <div className="input-wrapper">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    autoComplete="username"
                                    value={userInfos.username}
                                    onChange={onFieldChange}
                                />
                                <FieldError message={msgErrorUsername} />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    autoComplete="current-password"
                                    value={userInfos.password}
                                    onChange={onFieldChange}
                                />
                                <FieldError message={msgErrorPassword} />
                            </div>
                            <div className="input-remember">
                                <input
                                    type="checkbox"
                                    id="remember-me"
                                    checked={isChecked}
                                    onChange={onChecked}
                                />
                                <label htmlFor="remember-me">Remember me</label>
                            </div>
                            <FieldError message={msgErrorUser} />
                            <button className="sign-in-button">Sign In</button>
                        </form>
                    </section>
                </main>
            )}
        </>
    )
}
export default Login

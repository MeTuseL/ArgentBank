import Header from '../../components/Header'
import { useState, useEffect } from 'react'
import apiService from '../../services/apiService'
import { useNavigate } from 'react-router-dom'
import FieldError from '../../components/FieldError'

function Login() {
    document.title = 'Argent Bank - Login'
    const navigate = useNavigate()
    const [loading, setIsLoading] = useState(true)
    const [user, setUser] = useState({ username: '', password: '' })
    const [msgErrorUsername, setMsgErrorUsername] = useState('')
    const [msgErrorPassword, setMsgErrorPassword] = useState('')
    const [msgErrorUser, setMsgErrorUser] = useState('')

    //control field
    const reEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    const controlEmail = (email) => {
        return reEmail.test(email)
    }
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
    const controlPassword = (password) => {
        if (password === '') {
            setMsgErrorPassword('Empty fields.')
            return false
        }
        return true
    }
    //onsubmit login
    const login = (e) => {
        e.preventDefault()
        setMsgErrorUsername('')
        setMsgErrorPassword('')
        setMsgErrorUser('')

        if (
            (constrolUsername(user.username) &&
                controlPassword(user.password)) === true
        ) {
            //api service
            apiService
                .loginUser(user)
                .then((token) => {
                    if (token.success) {
                        navigate('/profile')
                    } else {
                        setMsgErrorUser(
                            'Sorry, the email address or password you entered is incorrect. Please check and try again.'
                        )
                    }
                })
                .finally(() => setIsLoading(false))
        } else {
            constrolUsername(user.username)
            controlPassword(user.password)
        }
    }

    const onFieldChange = (e) => {
        //onchange field

        const { name, value } = e.target
        const user_ = { ...user }
        user_[name] = value
        setUser(user_)
    }
    return (
        <>
            <Header />
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
                                value={user.username}
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
                                value={user.password}
                                onChange={onFieldChange}
                            />
                            <FieldError message={msgErrorPassword} />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <FieldError message={msgErrorUser} />
                        <button className="sign-in-button">Sign In</button>
                    </form>
                </section>
            </main>
        </>
    )
}
export default Login

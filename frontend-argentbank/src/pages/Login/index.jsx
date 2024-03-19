import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import { useState } from 'react'

function Login() {
    document.title = 'Argent Bank - Login'
    const login = (e) => {
        e.preventDefault()
    }
    const [user, setUser] = useState({ username: '', password: '' })
    const onFieldChange = (e) => {
        const { name, value } = e.target
        const user_ = { ...user }
        user_[name] = value
        setUser(user_)
    }
    return (
        <>
            <Header />
            <main class="main bg-dark">
                <section class="sign-in-content">
                    <i class="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form onSubmit={login}>
                        <div class="input-wrapper">
                            <label for="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={user.username}
                                onChange={onFieldChange}
                            />
                        </div>
                        <div class="input-wrapper">
                            <label for="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={user.password}
                                onChange={onFieldChange}
                            />
                        </div>
                        <div class="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label for="remember-me">Remember me</label>
                        </div>
                        <button class="sign-in-button">Sign In</button>
                    </form>
                </section>
            </main>
        </>
    )
}
export default Login

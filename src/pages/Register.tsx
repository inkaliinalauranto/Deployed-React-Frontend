import { useState } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { register } from "../services/auth"

export default function Register() {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [disabled, setDisabled] = useState(false)

    async function onRegister(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setDisabled(true)

        try {
            await register({ "username": username, "password": password })
            navigate("/")
        } catch (error) {
            alert(error)
        }

        setDisabled(false)
        // setUsername("")
        // setPassword("")
    }

    return <>
        <h2>Registration page</h2>
        <form onSubmit={onRegister}>
            <input
                id="username"
                autoComplete="username"
                required
                placeholder="Username"
                type="text" value={username}
                onChange={(e) => setUsername(e.target.value)} />

            <input
                id="password"
                autoComplete="password"
                required
                placeholder="Password"
                type="password" value={password}
                onChange={(e) => setPassword(e.target.value)} />

            <button type="submit" disabled={disabled}>Register</button>
        </form>
        <Link to="/"><p>Back to the login page</p></Link>
        <Outlet />
    </>
}
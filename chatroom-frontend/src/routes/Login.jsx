import { useState } from "react"
import Header from "./components/Header"

function Login() {
    //inputs
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    // Form submission
    function handleSubmit(e) {
        e.preventDefault()
        setUsername('')
        setPassword('')
        console.log('Attempting login')
    }

    return (
        <>
            <Header></Header>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text" 
                    onChange={(e) => setUsername(e.target.value)} 
                    value={username}
                    name="username"
                />
                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password}
                    name="password"
                />
                <button>Login</button>
            </form>
        </>
    )
}

export default Login
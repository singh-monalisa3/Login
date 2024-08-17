import React, { useState } from 'react';
import './Login.css';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === 'user' && password === 'password') {
            setIsLoggedIn(true);
            setMessage('Welcome, user!');
        } else {
            setMessage('Invalid username or password');
        }
    };

    if (isLoggedIn) {
        return (
            <div className="welcome-container">
                <h1>Login Page</h1>
                <p>{message}</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                {message && <p className="error-message">{message}</p>}
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default LoginPage;

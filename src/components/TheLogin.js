import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TheLogin = ({ setLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const loginStatus = localStorage.getItem('loginStatus');
    console.log("sdfas", loginStatus);
    if (loginStatus) {
        window.location.href = '/home';
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        // Your login logic here
        if (username === 'Pravin' && password === 'Pravin@123') {
            // Set isLoggedIn state in the parent component
            localStorage.setItem('loginStatus', true);
            // Redirect to home page on successful login
            navigate('/home');
        } else {
            // Set isLoggedIn state to false
            localStorage.setItem('loginStatus', false);
            // Set error message for incorrect username or password
            setError('Incorrect username or password');
        }
    };

    return (
        <div>
            <form>
                <div className=''>
                    <label>User Name</label>
                    <br />
                    <input type="text" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>Password</label>
                    <br />
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    <button type="button" onClick={handleLogin}>
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TheLogin;

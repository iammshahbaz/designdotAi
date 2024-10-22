import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css"

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.email === email && user.password === password) {
            localStorage.setItem('loggedIn', 'true');
            navigate('/home');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            width: '50vw',
            justifyContent: 'center',
            margin: 'auto',
            alignItems: 'center',
            padding: '20px',
        }}>
            <h1 className='heading1'>Login</h1>

            <form style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                width: '100%',
                maxWidth: '400px',
            }}>
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                className='inputStyle'/>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='inputStyle'
                />
                <button onClick={handleLogin} className="btn"> Login</button>

            </form>
        </div>
    );
};



export default Login;

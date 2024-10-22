import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css"

const Register = () => {
    
    

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        if (!name || !username || !email || !password) {
            alert("All fields are required!");
            return;
        }

        localStorage.setItem('user', JSON.stringify({ name, username, email, password }));
        navigate('/');
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
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        }}>
            <h1 className='heading1' >Create an Account</h1>

            <form style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                width: '100%',
                maxWidth: '400px',
            }}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='inputStyle'
                />
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='inputStyle'
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='inputStyle'
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='inputStyle'
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className='inputStyle'
                />
                <button
                    type="button"
                    onClick={handleRegister}
                    style={{
                        backgroundColor: '#007bff',
                        color: 'white',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '16px',
                    }}
                >
                    Register
                </button>
            </form>
        </div>
    );
};


export default Register;

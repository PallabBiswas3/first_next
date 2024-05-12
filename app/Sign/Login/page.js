"use client"
import './login.css';

const login = () => {
    const handle1 = () => {
        window.location.href = '/Sign/register';
    };
    return (
        <div className="login-container">
            <h2 className="login-title">Welcome</h2>
            <p className="login-subtitle">Sign in to your account</p>
            <form method="POST" action="#" className='login-form'>
                <div className="relative">
                    <input placeholder="john@example.com" required id="email" name="email" type="email" />
                    <label htmlFor="email">Email address</label>
                </div>
                <div className="relative">
                    <input placeholder="Password" required id="password" name="password" type="password" />
                    <label htmlFor="password">Password</label>
                </div>

                <button type="submit">Sign In</button>
            </form>
            <div className="login-footer">
                <p>Don't have an account? <a href="/Sign/Register" onClick={handle1}>Register</a></p>
            </div>
        </div>
    );
}
export default login;
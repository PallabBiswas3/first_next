"use client"
import "./register.css"
const RegisterForm = () => {
    const handle2 = () => {
        window.location.href = '/Sign/Login';
    };
    return (
        <div className="container">
            <div className="login">
                <div className="container">
                    <h1>Register</h1>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" /><br />
                    <input type="checkbox" /><span>Remember me</span>
                    <a href="#">Forgot password?</a>
                    <button>log in</button>
                    <hr /><p>Or Connect With</p><hr />
                    <ul>
                        <li><i className="fab fa-facebook-f fa-2x"></i></li>
                        <li><i className="fab fa-twitter fa-2x"></i></li>
                        <li><i className="fab fa-github fa-2x"></i></li>
                        <li><i className="fab fa-linkedin-in fa-2x"></i></li>
                    </ul>
                    <div className="clearfix"></div>
                    <span className="copyright">&copy;2019</span>
                </div>
            </div>
            <div className="register">
                <div className="container">
                    <i className="fas fa-user-plus fa-5x"></i>
                    <h2>Hello, friend!</h2>
                    <p>Enter your personal details and start journey with us</p>
                    <h3>Already have account?</h3>
                    <button><a href="/Sign/Login" onClick={handle2}>Login<i className="fas fa-arrow-circle-right"></i></a></button>
                </div>
            </div>
        </div>
    );
}

export default RegisterForm;

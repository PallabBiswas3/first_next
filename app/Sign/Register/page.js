import { useState } from 'react';
import "./register.css"

function Page() {
    const [formType, setFormType] = useState('signup');

    const handleFormChange = (type) => {
        setFormType(type);
    };

    return (
        <div className={`signup-page-container ${formType === 'signup' ? 'signup-form-open' : 'login-form-open'}`}>
            <div className="signup__container signup-form">
                <div className="container__child signup__thumbnail" style={{ backgroundImage: 'url(https://p.w3layouts.com/demos_new/template_demo/19-06-2017/assets-demo_Free/554297363/web/images/7.jpg)' }}>
                    <div className="thumbnail__logo">
                        <img src="http://192.168.1.6:8080/house-rent-management/owner_front_end/assets/img/logo.png" alt="" />
                    </div>
                    <div className="thumbnail__content text-center">
                        <h1 className="heading--primary">Welcome to signup</h1>
                        <h2 className="heading--secondary">Are you ready to join?</h2>
                    </div>
                    <div className="signup__overlay"></div>
                </div>
                <div className="container__child signup__form">
                    <form action="#">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input id="username" className="form-control" type="text" name="username" placeholder="" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input id="email" className="form-control" type="email" name="email" placeholder="" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input id="password" className="form-control" type="password" name="password" placeholder="" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="passwordRepeat">Repeat Password</label>
                            <input id="passwordRepeat" className="form-control" type="password" name="passwordRepeat" placeholder="" required />
                        </div>
                        <div className="m-t-lg">
                            <ul className="list-inline">
                                <li><input className="btn btn--form" type="submit" value="Register" /></li>
                                <li><a className="signup__link" href="#" onClick={() => handleFormChange('login')}>I am already a member</a></li>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
            <div className="login-container">
                <div className="signup__container">
                    <div className="container__child signup__form">
                        <form action="#">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input id="email" className="form-control" type="email" name="email" placeholder="" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input id="password" className="form-control" type="password" name="password" placeholder="" required />
                            </div>
                            <div className="m-t-lg">
                                <ul className="list-inline">
                                    <li><input className="btn btn--form" type="submit" value="Login" /></li>
                                    <li><a className="signup__link" href="#" onClick={() => handleFormChange('signup')}>Create a new member</a></li>
                                </ul>
                            </div>
                        </form>
                    </div>
                    <div className="container__child signup__thumbnail" style={{ backgroundImage: 'url(https://p.w3layouts.com/demos_new/template_demo/19-06-2017/assets-demo_Free/554297363/web/images/7.jpg)' }}>
                        <div className="thumbnail__logo">
                            <img src="http://192.168.1.6:8080/house-rent-management/owner_front_end/assets/img/logo.png" alt="" />
                        </div>
                        <div className="thumbnail__content text-center">
                            <h1 className="heading--primary">Welcome to login</h1>
                            <h2 className="heading--secondary">Are you ready to login?</h2>
                        </div>
                        <div className="signup__overlay"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;

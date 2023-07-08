
import { useState } from "react";
import './Login.scss'
import { Link } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

	const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstName);
    }

return(
<>
<section className="login">
    <div className="container">
<div className="auth-form-container">
    <div className="login-box">
            <h2 className="mb-7 font-semibold">Sign in to Gear Head Garage</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <div className="userEmail">
            <label className={email ? 'valueapply' : ''} htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder=" " id="email" name="email" />
            </div>
            <div className="pass">
            <label className={pass ? 'valueapply' : ''} htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder=" " id="password" name="password" />
            </div>
            <button type="submit" class="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 text-white font-bold py-2 px-4 rounded-full mb-3">Sign In</button>
        </form>
        <Link className="link-btn" to="/Register">Don't have an account? Create one here.</Link>
    </div>
    </div>
    </div>
	</section>
</>

);

}

export default Login;
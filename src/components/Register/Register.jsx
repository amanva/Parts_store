
import { useState } from "react";
import './Register.scss'

function Register() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

	const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
return(
<>
<section className="register">
    <div className="container">
<div className="auth-form-container">
    <div className="register-box">
            <h2>Create an account</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <div className="userName">
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            </div>
            <div className="userEmail">
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            </div>
            <div className="pass">
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password123!" id="password" name="password" />
            </div>
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    </div>
    </div>
	</section>
</>

);

}

export default Register;
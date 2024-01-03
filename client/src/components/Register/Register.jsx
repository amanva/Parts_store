
import { useState } from "react";
import './Register.scss'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"


function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const [userExists, setUserExists] = useState("");

    const reg = async (e) => {
        e.preventDefault();
          await fetch('https://gearheadgarage.azurewebsites.net/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: email,
              password: pass,
            }),
          })
          getUser();
          
      }
      const getUser = async () => {
        try {
          await axios.get("https://gearheadgarage.azurewebsites.net/register").then(response => {
            setUserExists(response.data);
            console.log(response.data);
          })
        } catch (err) {
          console.log(err);
        }
      };

return(
<>
<section className="register">
    <div className="container">
<div className="auth-form-container">
    <div className="register-box">
            <h2 className="mb-7 font-semibold">Create an account</h2>
        <form className="register-form" action = 'https://gearheadgarage.azurewebsites.net/register' onSubmit={reg}  method="POST">
        {userExists == "" ? <></>: <h2 className="mb-7 font-semibold">{userExists}</h2>}
            <div className="userFirstName">
            <label className={firstName ? 'valueapply' : 'reg-label'} for="userFirstName">First Name</label>
            <input value={firstName} name="userFirstName" onChange={(e) => setFirstName(e.target.value)} id="userFirstName" placeholder=" " />
            </div>
            <div className="userLastName">
            <label className={lastName ? 'valueapply' : 'reg-label'} for="userLastName">Last Name</label>
            <input value={lastName} name="userLastName" onChange={(e) => setLastName(e.target.value)} id="userLastName" placeholder=" " />
            </div>
            <div className="userEmail">
            <label className={email ? 'valueapply' : 'reg-label'} htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder=" " id="email" name="email" />
            </div>
            <div className="pass">
            <label className={pass ? 'valueapply' : 'reg-label'} htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder=" " id="password" name="password" />
            </div>
            <button type="submit" class="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 text-white font-bold py-2 px-4 rounded-full mb-3">Register</button>
        </form>
        <Link className="link-btn" to="/Login">Already have an account? Login here.</Link>
    </div>
    </div>
    </div>
	</section>
</>

);

}

export default Register;
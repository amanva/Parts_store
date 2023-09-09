
import { useState, useEffect} from "react";
import './Login.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    
    const [isLoginValid, setIsLoginValid] = useState(false);
    const [isCorrect, setIsCorrect] = useState("");

    useEffect(() => {
      getForm();
  }, []);

	const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: email,
              password: pass,
            }),
          })
          getForm();
    }
    
    const getForm = async () => {
        try {
          await axios.get("http://localhost:3001/login").then(response => {
            setIsLoginValid(response.data.value);
            setIsCorrect(response.data.incorrect);
          })
        } catch (err) {
          console.log(err);
        }
      };

      const handleLogOut = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:3001/logout', {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: email,
              password: pass,
            }),
          })
          getForm();
    }
return(
<>
<section className="login">
    <div className="container">
<div className="auth-form-container">
{!isLoginValid ? 
    <div className="login-box">
            <h2 className="mb-7 font-semibold">Sign in to Gear Head Garage</h2>
            {isCorrect == "" ? <></>: <h2 className="mb-7 font-semibold">{isCorrect}</h2>}
        <form className="login-form" action = 'http://localhost:3001/login' onSubmit={handleSubmit} method="POST">
            <div className="userEmail">
            <label className={email ? 'valueapply' : 'log-label'} htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder=" " id="email" name="email" />
            </div>
            <div className="pass">
            <label className={pass ? 'valueapply' : 'log-label'} htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder=" " id="password" name="password"/>
            </div>
            <button type="submit" class="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 text-white font-bold py-2 px-4 rounded-full mb-3">Sign In</button>
        </form>
        <Link className="link-btn" to="/Register">Don't have an account? Create one here.</Link>
        
    </div>
    : <div className="login-box">
      <form className="login-form" action = 'http://localhost:3001/logout' onSubmit={handleLogOut} method="DELETE">
      <h2 className="mb-7 font-semibold">Sign in to Gear Head Garage</h2> 
    <button type="submit" class="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 text-white font-bold py-2 px-4 rounded-full mb-3">Log Out</button>
    </form>
    </div>
    }
    </div>
    </div>
	</section>
  
</>


);

}

export default Login;



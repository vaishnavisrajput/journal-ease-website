import React, { useContext, useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import UserContext from "../context/UserContext";
function SignIn() {
    const navigate = useNavigate();

    const[username, setUsername] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    

    

  



    const {user, setUser} = useContext(UserContext);
    

    const handleClick = (e) => {
        e.preventDefault();
        setUser({username, email, password})

        navigate('/dashboard')
    }

    useEffect(() => {
     if(user !== null ){
        navigate('/dashboard');
    }
      
    }, [user, navigate])
    
    
    
  return (
    <div className="main">
      <div className="sign-in">
        <form className="form">
          <div className="title">
            <h1>Sign up now to create an account!</h1>
          </div>
          <input
            type="text"
            name="fullname"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
          <br />
          <input type="email" 
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email" />
          <br />
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter your user password"
          />
          <br />
          <button onClick={handleClick} className="login">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;

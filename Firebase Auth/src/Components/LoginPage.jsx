import React, { useState } from 'react';
import Navbar from './Navbar';
import GoogleButton from 'react-google-button';
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import {signOut } from 'firebase/auth';
import { auth, provider } from '../Services/firebase';
import '../Styles/LoginPage.css'

const Loginpage = () => {
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log('User signed up:', res);
        alert('User signed up:', res)
      })
      .catch((err) => console.log(err.message),
        alert("Invalid Email Or Password !")
      );
  };

  // Email/Password Login
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log('User logged in:', res);
        alert('User logged in:', res)
      })
      .catch((err) => console.log(err.message));
    alert("Try Again !")
  };

  const handleSignOut = () => {
    signOut(auth)
      .then((res) => alert(" Sign-out successful."))
      .catch((err) => alert("An error happened"))
  }
  return (
    <div>
      <Navbar />
      <div className="mt-4 pt-4 text-center infoback">
        <GoogleButton className='' onClick={handleGoogleLogin} />

        <div className="mt-4" style={{color:'white'}}>
          <h3>{isNewUser ? 'Sign Up' : 'Log In'} with Email</h3>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control my-2"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control my-2"
          />
          {isNewUser ? (<button className="btn btn-primary" onClick={handleSignup}>Sign Up</button>) : (<button className="btn btn-primary" onClick={handleLogin}>Log In</button>
          )}
          <div className="mt-3">
            <p onClick={() => setIsNewUser(!isNewUser)} style={{ cursor: 'pointer' }}>
              {isNewUser ? 'Already have an account? Log In' : "Don't have an account? Sign Up"}
            </p>
          </div>
        </div>
      </div>

      {user && (
        <div className="user-info mt-4 text-center text-white">
          <img src={user.photoURL} alt="User Avatar" style={{ borderRadius: "50%" }} />
          <h2>Welcome, {user.displayName}</h2>
          <p>Email: {user.email}</p>
        </div>
      )}
      <div>
        <button onClick={handleSignOut}>logout</button>
      </div>
    </div>
  );
};

export default Loginpage;

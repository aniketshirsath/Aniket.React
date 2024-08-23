import React from 'react'
import Navbar from './Navbar'
import GoogleButton from 'react-google-button'
import { signInWithPopup } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, provider } from './Service/Firebase';


const Loginpage = () => {
    const [user] = useAuthState(auth);

    const handleLogin = () => {
      signInWithPopup(auth, provider)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    };
  return (
    <div className='bgimg'> 
    <Navbar/>
    <div className='googlebtn' style={{marginLeft:'41%',marginTop:'18%'}}>
    <GoogleButton className='' onClick={handleLogin}/>
    </div>
    </div>
  )
}

export default Loginpage
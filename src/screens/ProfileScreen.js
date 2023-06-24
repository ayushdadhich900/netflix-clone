import React from 'react'
import Nav from '../Nav'
import "./ProfileScreen.css"
import { useSelector } from 'react-redux'
import { selectUser } from '../features/counter/userSlice'
import { auth } from '../firebase'
import PlansScreen from './PlansScreen'


function ProfileScreen() {
  
  return (
    <div className='profileScreen'>
        <Nav />
        <div className='profileScreen_body'>
          <h1>Edit Profile</h1>
          <div className='profileScreen_info'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' />
            <div className='profileScreen_details'>
              <h2>abc@gmail.com</h2>
              <div className='profileScreen_plans'>
                <h3>Plans</h3>

                <PlansScreen />
                <button onClick={() => auth.signOut()} className='profileScreen_signout'>Sign Out</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProfileScreen
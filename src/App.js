import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import { auth } from "./firebase"
import { useDispatch, useSelector, } from 'react-redux';
import { login, logout, selectUser,} from './features/counter/userSlice';

    




function App() {
   const user = null;
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      (userAuth) => {
      if(userAuth) {
        dispatch(
          login({
          uid:userAuth.uid,
          email:userAuth.email,
        }))
      } else {
        //Logged out
        dispatch(logout())
      }
    });

    return unsubscribe;
  },[dispatch]);


  return (
    <div className="app">
       <Router>
        {/* {!user ? (
          <LoginScreen />
        ) : ( */}
          <Routes>
            <Route path='/profile' element ={<ProfileScreen />} />
          <Route path="/" element={<HomeScreen />} />
          <Route path='/login' element ={<LoginScreen />} />
          </Routes>
          {/* )}  */}
      
       </Router>
    </div>
  );
}

export default App;

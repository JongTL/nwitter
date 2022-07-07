import React,{useEffect, useState} from "react";
import AppRouter from "components/Router";
import {authService} from "fBase";
import { setLogLevel } from "firebase/app";



function App() {
  const [init,setInit]=useState(false);
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  useEffect(()=>{
     authService.onAuthStateChanged((user)=>{
       if(user){
         setIsLoggedIn(true);
       } else {
         setIsLoggedIn(false);
       }
       setInit(true);
     });
  },[])
  return (
    <>
      {init?<AppRouter isLoggedIn={isLoggedIn}/> : "Loading..."}
      <foot>&copy; Nwitter {new Date().getFullYear()}</foot>
    </>
  );
}

export default App;

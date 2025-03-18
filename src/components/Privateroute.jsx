import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

const Privateroute = () => {

let loggedIn=true;

if(loggedIn){
    return <Outlet/>
}
else{   
    return <Navigate to={"/login"}/>

}                                                  

//   return (
//     <> 

//     <h1>Private Route</h1>

//     <Outlet/>
//     </>

//   )
}

export default Privateroute
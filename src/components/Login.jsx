// import React from "react";

// const Login = () => {
//   return (
//     <div>
//       <h2>Login</h2>
//       <form>
//         <input className="" type="email" placeholder="Email" required />
//         <input type="password" placeholder="Password" required />
//         <button  type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); 
    navigate("/home"); 
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

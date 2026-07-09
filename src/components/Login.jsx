import "./Login.css";
import { Link, useNavigate } from "react-router-dom";


function Login(){

  const navigate = useNavigate();


 const handleLogin = (e) => {
    e.preventDefault();

    navigate("/dashboard");
};

  return(

    <div className="login-page">


      <div className="login-box">


        <h1>
          Login
        </h1>


        <p>
          Welcome back! Please login to your account.
        </p>



        <form onSubmit={handleLogin}>


          <input
            type="email"
            placeholder="Email"
          />


          <input
            type="password"
            placeholder="Password"
          />


          <button>
            Login
          </button>


        </form>



        <span>

          Don't have an account?


          <Link to="/register">
            Register
          </Link>


        </span>


      </div>


    </div>

  );

}


export default Login;
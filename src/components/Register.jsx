import "./Register.css";
import { Link, useNavigate } from "react-router-dom";


function Register(){

  const navigate = useNavigate();


  const handleRegister = (e) => {

    e.preventDefault();

    navigate("/");

  };


  return(

    <div className="register-page">


      <div className="register-box">


        <h1>
          Register
        </h1>


        <p>
          Create your new account.
        </p>



        <form onSubmit={handleRegister}>


          <input
            type="text"
            placeholder="Full Name"
          />


          <input
            type="email"
            placeholder="Email"
          />


          <input
            type="password"
            placeholder="Password"
          />


          <button>
            Create Account
          </button>


        </form>



        <span>

          Already have an account?


          <Link to="/">
            Login
          </Link>


        </span>



      </div>


    </div>

  );

}


export default Register;
import { useState } from "react";
import Logo from "../assets/images/Title.png";
import InputField from "../common/inputField";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [email,setemail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    const PostData = async()=>{
      
        try{
            await axios.post("https://pokemon-be-lmwu.onrender.com/v3/user/login",{
                email:email,
                password:password
            }).then((response)=>localStorage.setItem("token", response?.data?.token))
            navigate("/pokemons")

            setemail("")
            setPassword("")
        }catch{
            console.log(error)
            alert("Invalid credentials. Please try again.");
            setemail("")
            setPassword("")
        }
    }


  return (
    <>
      <div className="container-fluid mainsection">
        <div className="container">
          <div>
            <img src={Logo} alt="pokedex" className="logo-img" />
          </div>
          <div className="login-card">
            <div className="login">
              <h3>Login to pokedex</h3>
              <InputField type="email" placeholder="Email address" className="text-field" value={email} onChange={(e)=>setemail(e.target.value)} />
              <InputField type="password" placeholder="Password" className="text-field" value={[password]} onChange={(e)=>setPassword(e.target.value)}/>
              <button type="button" class="btn mt-4 login-btn " onClick={PostData}>Login</button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;

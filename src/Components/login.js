
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import { auth, db } from "./Firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { handleAddLoggedUser, handleAddToggleLogin } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";


//import quizLogo from "../../Components/Assets/quizLogo.webp";

const Login=()=>{

    //const [login, setLogin]=useState(0);
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const {login}=useSelector((state)=>state);
    const [user, setUser]=useState("");

    const navigate=useNavigate();
    const dispatch=useDispatch();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        await signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            console.log(userCredential);
            const user=userCredential.user;
            dispatch(handleAddToggleLogin(true));
            dispatch(handleAddLoggedUser(user.email));
            console.log(user.email);
        setUser(user.email)
            setEmail("");
            setPassword("");
            navigate("/");
        })
        .catch((e)=>console.log(e));
        
    }
    
        
    return(
        <div>
        <div className="loginContainer">
            
            <h1>Welcome Back</h1>
            <p>Login to your account.</p>
            <form className="loginFormContainer" onSubmit={handleSubmit}>
                
                    <input type="email" 
                    value={email} 
                    placeholder="Enter Your Email..." 
                    onChange={(e)=>setEmail(e.target.value)}/>
                
                    <input type="password" 
                    value={password} 
                    placeholder="Enter Your Password..." 
                    onChange={(e)=>setPassword(e.target.value)}/>
                
                    <button>
                        Login
                    </button>
                
                    <p>Not Yet Registered? <Link to="/signup">Signup Here</Link></p>
                

            </form>
            </div>
        </div>
    );
}

export default Login;
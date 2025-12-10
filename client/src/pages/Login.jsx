import { assets } from '../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { AppContext } from '../context/Appcontext';

const Login = () => {
    const [isCreateAccount, setIsCreateAccount] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const { backendUrl, setIsLoggedIn, getUserData } = useContext(AppContext);
    const navigate = useNavigate();

    const onSubmitHandler = async (e) => {
            e.preventDefault();
            axios.defaults.withCredentials = true;
            setLoading(true);
        try{
            if(isCreateAccount){
                const response = await axios.post(`${backendUrl}/api/auth/register`, {name, email, password});

                if(response.status === 201){
                    setIsLoggedIn(true);
                    getUserData();
                    navigate('/');
                    toast.success("Account created successfully");
                }else{
                   toast.error("Email already exists");
                }
            }
            else{
                const response = await axios.post(`${backendUrl}/api/auth/login`, {email, password});

                if(response.status === 200){
                    setIsLoggedIn(true);
                    getUserData();
                    navigate('/');
                }else{
                    toast.error(response.data.message);
                }
            }
        }catch(error){
            toast.error(error.response.data.message);
        }
        finally{
            setLoading(false);
        }
        
    }
    return (
        <div className="position-relative min-vh-100 d-flex justify-content-center align-items-center" style={{ background: "linear-gradient(to right, #947aebff, #8066c8ff)" }}>
            <div style={{position: "absolute", top: "20px", left: "30px", alignItems: "center"}}>
                <Link to="/" style={{display: "flex", alignItems: "center", gap: "10px", fontSize: "24px", textDecoration: "none"}}>
                    <img src={assets.logo} alt="logo" width={32} height={32}/>
                    <span className="fw-bold fs-4 text-white">AccessCore</span>
                </Link>
            </div>
            <div className="card p-4" style={{ maxWidth: "400px",width: "100%", borderRadius: "10px"}}>
                <h2 className="text-center mb-4">
                    {isCreateAccount ? "Create Account" : "Login"}
                </h2>
                <form onSubmit={onSubmitHandler}>
                    {
                        isCreateAccount && (
                            <div className="mb-3">
                                <label htmlFor="fullName" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="fullName" placeholder="Enter your full name" required onChange={(e) => setName(e.target.value)} value={name} />
                            </div>
                        )
                    }
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" required onChange={(e) => setEmail(e.target.value)} value={email} />
                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="*************" required onChange={(e) => setPassword(e.target.value)} value={password} />
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <Link to="/reset-password" className="text-decoration-none">Forgot Password?</Link>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        {isCreateAccount ? "Sign Up" : "Login"}
                    </button>
                </form>
                <div className="text-center mt-3">
                    <p className="mb-0">  
                        {isCreateAccount ? (
                            <>
                                Already have an account?{" "} <span className="text-decoration-underline text-primary" style={{cursor:"pointer"}} onClick={() => setIsCreateAccount(false)}>Login here</span>
                            </>
                        ) : (
                        <>
                            Don't have an account?{" "}<span className="text-decoration-underline text-primary" style={{cursor:"pointer"}} onClick={() => setIsCreateAccount(true)}>Sign Up</span>
                        </>
                    )}
                    </p> 
                </div>

            </div>
        </div>



    )
}

export default Login;
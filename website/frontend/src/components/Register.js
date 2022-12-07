import React, {useState} from "react";
// import { useInRouterContext } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import {useNavigate} from 'react-router-dom';


function Register() {
    const navigate = useNavigate();
    const adminUser = {
        email: "user1@gmail.com",
        password: "admin123"
    }
    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");
    
    const Login = details => {
        console.log(details);

        if (details.email === adminUser.email && details.password === adminUser.password) {
            console.log("Logged in");
            setUser({
                name: details.name,
                email: details.email
            });
        } else {
            console.log("Details do not match");
            setError("Details do not match");
        }
    }
    
    const Logout = () => {
        setUser({name: "", email: ""});
    }
    return (
    <div className="Login">
        {(user.email !== "") ? (
            <div className="welcome">
                <h2>Welcome, <span>{user.name}</span></h2>
                <button onClick={Logout}>Logout</button>
                <button class = "Home" onClick={() => navigate("/")}>Home</button>
            </div>
        ) : (
            <RegisterForm Login={Login} error={error} />
        )}
    </div>
    );
}

export default Register;


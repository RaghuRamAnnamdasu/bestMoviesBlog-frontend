import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../global";

import "./login.css";


export function Login() {
    const navigate = useNavigate();
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[invalidErrorMessage, setInvalidErrorMessage] = useState("");

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onLogin = async (e) => {
        e.preventDefault();
        var data = [{
            email: email,
            password: password
        }];
        const result = await fetch(`${API}/users/login`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"content-type": "application/json"}
        }).then(response => response.json()
        ).catch((error) => {
            console.log("error", error)
        })

        if(result.message === "Successful Login") {
            localStorage.setItem("user", JSON.stringify({token: result.token, userName: result.name, userId : result.id, image: result.image}));
            navigate("/movies");
           
        } else {
            setInvalidErrorMessage(result.message);
        }
    };

    return (
      <div className="login">
        
        <form className="loginContent" onSubmit={(e) => onLogin(e)}>
            <div className="loginLogoWrapper">
                <h3>Admin Login</h3>
                <div className="logoText">Need Permission to access it. Are you an admin?</div>
            </div>
            {invalidErrorMessage && <div className="invalidErrorMessage">{invalidErrorMessage}</div>}
            <div className="emailWrapper">
                <label htmlFor="email">Email</label>
                <input id="email" type="text" onChange={(e) => onEmailChange(e)} required/>
            </div>
            <div className="passwordWrapper">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" onChange={(e) => onPasswordChange(e)} required/>
            </div>
            <Button type="submit" variant="contained">Login</Button>
        </form>
      </div>
    );
}
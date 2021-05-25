import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [user, setUser] = useState({
        name: "",
        password: "",
        errors: {}
    });
    const onSubmit = (event) => {
        event.preventDefault();
        const newUser = {
            name: user.name,
            password: user.password
        };
        console.log(newUser);
    };
    const {errors} = user;
    return(
        <div>
            <form noValidate onSubmit={onSubmit}>
                {/* Username Input */}
                <h1>Username:</h1>
                <input 
                className="Username" 
                onChange={(event) => setUser({...user, name: event.target.value})}
                error={errors.name}
                type="text" 
                />  

                {/* Password Input */}
                <h1>Password:</h1>
                <input 
                className="Password" 
                onChange={(event) => setUser({...user, password: event.target.value})}
                error={errors.password}
                type="password" 
                /> 

                <button className="submitButton" type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
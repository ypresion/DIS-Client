import React, { useState } from "react";
import Login from "./Login.js";
import { useNavigate } from "react-router-dom";
import { GlobalStateContext } from "../GlobalStateProvider";


const LoginPage = () => {

    let navigate = useNavigate();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const [ state, dispatch ] = React.useContext(GlobalStateContext);


    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    
    const handleLoginClick = () => {
    	let url = "http://unn-w18015597.newnumyspace.co.uk/kf6012/coursework/part1/api/authenticate" 
        console.log(state);

        // Send the email and password as 'Form Data'.
        let formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        // A fetch request with 'POST' method specified
        fetch(url, { method: 'POST',
                    headers : new Headers(),
                    body:formData
                })
        .then( (response) => {
            // Successful authentication will return
            // a 200 status code.
            if (response.status === 200) {
                return response.json() 
            } else {
                throw Error(response.statusText)
            }
        })
        .then( (data) => {
            console.log(data)

            // If results include a token, change state
            // to authenticated
            if ("token" in data.results) {
                // Save token in local storage
                localStorage.setItem('authToken', data.results.token); 
                dispatch({ authorised: true })
                navigate("/");
            }
        })
        .catch ((err) => {
            console.log("something went wrong ", err)
            }
        );
    }


        return (
            <Login 
                handleEmail={handleEmail} 
                handlePassword={handlePassword}
                handleLoginClick={handleLoginClick}
            />
        )
    
}

export default LoginPage;
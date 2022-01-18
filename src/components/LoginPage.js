import React, { useState } from "react";
import Login from "./Login.js";
import { useNavigate } from "react-router-dom";
import { GlobalStateContext } from "../GlobalStateProvider";

/**
 * Login page component.
 * 
 * It will handle user login. On successful authentication, 
 * it will save JWT token to local storage and set global state to authorised. 
 * 
 * @author Sylwia Krupa | w18015597
 */
const LoginPage = () => {

    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [state, dispatch] = React.useContext(GlobalStateContext);


    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    //Authenticate the user with credentials provided in the login form.
    //On successful authorization, save JWT token to local storage and user's
    //reading list to global state.
    const handleLoginClick = () => {
        let url = "http://unn-w18015597.newnumyspace.co.uk/kf6012/coursework/part1/api/authenticate"

        let formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        fetch(url, {
            method: 'POST',
            headers: new Headers(),
            body: formData
        })
            .then((response) => {
                if (response.status === 200) {
                    return response.json()
                } else {
                    throw Error(response.statusText)
                }
            })
            .then((data) => {
                if ("token" in data.results) {
                    setAuth(data);
                    setReadingList();  
                    navigate("/");
                }
            })
            .catch((err) => {
                console.log("something went wrong ", err)
            }
            );
    }

    //save JWT token to local storage and global state
    const setAuth = (data) => {
        localStorage.setItem('authToken', data.results.token);
        dispatch({ authorised: true })
    }

    //save reading list to global state
    const setReadingList = () => {
        let url = "http://unn-w18015597.newnumyspace.co.uk/kf6012/coursework/part1/api/readinglist"
        let formData = new FormData();
        formData.append('token', localStorage.getItem('authToken'));

        fetch(url, {
            method: 'POST',
            headers: new Headers(),
            body: formData
        })
            .then((response) => {
                if (response.status === 200) {
                    return response.json()
                } else {
                    throw Error(response.statusText);
                }
            })
            .then((data) => {
                localStorage.setItem('readingList', JSON.stringify(data.results));
                dispatch({ readingList: data.results })
            })
            .catch((err) => {
                console.log("something went wrong ", err)
            });
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
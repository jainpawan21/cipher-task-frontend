import React, { useState } from "react";
import {Link} from 'react-router-dom';
import axios from '../constants/axios';

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        if(email === '' || password === '' || name === ''){
            setSubmitSuccess(true)
            setErrorMessage('Please fill all the fields')
        }
        else {
            axios.post('/users',{
                name, email, password
            })
            .then((res) => {
                console.log(res)
                setSubmitSuccess(true)
                setSuccessMessage('Successful Signup')
                setErrorMessage('')
                localStorage.setItem('isAdmin', res.data.user.isAdmin)
                window.location.href="/"
            })
            .catch((e) => {
                console.log(e.reponse);
                setSubmitSuccess(true);
                setErrorMessage('Some Error Occured, Try Again')
                setSuccessMessage('')
            })
        }
    }
    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
        <form>
            <h3>Sign In</h3>
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Full Name" onChange={(e) => {
                    setName(e.target.value);
                    setSubmitSuccess(false)
                }}/>
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => {
                    setEmail(e.target.value)
                    setSubmitSuccess(false)
                }}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => {
                    setPassword(e.target.value)
                    setSubmitSuccess(false)
                }}/>
            </div>


            <button type="submit" className="btn btn-primary btn-block" onClick={(e) => handleSubmit(e)}>Sign Up</button>
            {submitSuccess === true && errorMessage === '' && successMessage !== '' ? <p className="forgot-password text-left">
               {successMessage}
            </p> : null}
            {submitSuccess === true && errorMessage !== '' && successMessage === '' ? <p className="forgot-password text-left">
                {errorMessage}
            </p> : null}
            
            <p className="forgot-password text-right">
                Already registered <Link to="/sign-in" >sign in?</Link>
            </p>
        </form>
        </div>
        </div>
    );
}


export default SignUp;
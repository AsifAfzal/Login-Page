import React, { useState } from 'react';
import axios from 'axios';

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({ email: "", password: ""});

    const submitHandler = e => {
        
        axios.post('http://67.23.235.185:92/Login/UserLoginCheck?UserName=admin&Password=admin&DeptId=1')
        .then((response) => {
          console.log(response)
        });


        e.preventDefault();
        if(details.email =='')
        {
            alert('Enter Username!!')
        }
        if(details.password =='')
        {
           alert('Enter Password!!')
        }
        // Login(details);
    }


    return (
        <form onSubmit={ submitHandler }>
            <div className='form-inner'>
                <h2>Login</h2>
                {(error !== "") ? (<div className="error">{error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                <input type="submit" value="LOGIN" />
                <p><a href="default.asp">Sign Up</a></p><br />
            </div>
        </form>
    )
}

export default LoginForm

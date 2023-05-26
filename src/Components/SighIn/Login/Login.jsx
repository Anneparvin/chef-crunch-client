import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const form = location.state?.from?.pathname || '/';


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        toast.success('Successfully Login!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
     });

      //Password Error Message
      if(!/(?=.*[A-Z])/.test(password)){
        setPasswordError('Please provide atleast one uppercase.');
        setError(true);
        return;
    }
    if(password.length < 8){
        setPasswordError('Password should be atleast 8 characters.');
        setError(true);
        return;
    }
    if(!/(?=.*[!@#$%*])/.test(password)){
        setPasswordError('Please use atleast 1 special character.');
        setError(true);
        return;
    }

    // user sign in
    signIn(email, password)
    .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, {replace: true});
    })
    .catch(error => {
        console.error(error.message);
        setPasswordError(error.message)
    })

    }

    //Google Sign in
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true });
        })
        .catch(error => console.error(error.message))
    };

     //GitHub Sign in
     const handleGithubSignIn = () =>{
        githubSignIn()
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true });
        })
        .catch(error => console.error(error.message))
    }

    return (
        <div>
             <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                <label className="label flex">
                    <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
            </div>
            <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Login" />
            </div>
        </form>
        </div>
    );
};

export default Login;
import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../Providers/AuthProvider';


const Login = () => {
    const {signIn, googleSignIn, githubSignIn} = useContext(AuthContext);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


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
        setSuccess(true);
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
        <div className="card flex-shrink-0 w-full mx-auto max-w-sm shadow-2xl bg-base-100 py-20 mt-12">
        <h1 className="text-5xl text-center font-bold">Login</h1>

        {/* password Error */}
        {
                            error && 
                            <div className="alert alert-error shadow-lg">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                              <span>{passwordError}</span>
                            </div>
                            </div>
                        }

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
        <p className='text-primary text-sm'>{success}</p>
        <ToastContainer/>

        {/* social login */}
        <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                        <p className="px-3 text-sm text-gray-400">Login with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="p-3 rounded-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                        </button>

                        <button onClick={handleGithubSignIn} aria-label="Log in with GitHub" className="p-3 rounded-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                            </svg>
                        </button>
                    </div>
                    <p className='text-center'>New to Chef Krunch App
        <Link className='text-orange-600 font-bold' to="/register">Register</Link> </p>

        </div>
    );
};

export default Login;
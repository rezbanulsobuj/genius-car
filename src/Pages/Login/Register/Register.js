import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {


    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login')
    }
    const haldleRegister = (event) => {
        event.preventDefault();
        // console.log(event.target.email.value)
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password)

    }
    return (
        <div className='register-form'>
            <h2 className='text-primary text-center m-4'>Please Register</h2>
            <form onSubmit={haldleRegister} className='bg-info p-5'>

                <input type="text" name="name" id="" placeholder='Enter Your Name' required />
                <input type="email" name="email" id="" placeholder='Enter Your Email' required />
                <input type="password" name="password" placeholder='Enter Password' required />
                <input className='bg-info text-white' type="submit" value="Register" id="" />
            </form>
            <p className='mt-4 text-center'>Already Have An Account?
                <span className='text-primary register' onClick={navigateLogin}> Go To Login Form</span></p>
        </div>
    );
};

export default Register;
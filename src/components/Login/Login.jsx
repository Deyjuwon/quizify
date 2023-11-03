import React from 'react'
import './Login.css'
import { AiFillApple } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { AiOutlineGoogle } from 'react-icons/ai'


const Login = () => (
    <div className='login-container'>
        <h1>Log in</h1>
        <section className='login-sec'>
            <form className='login-form' action="">
                <label htmlFor="email">Email</label>
                <input className='login-input' type="text" required placeholder='Your email address' />
                <button className='login-btn'>Continue with email</button>
            </form>
        </section>
        <div class="or-container">
            <span class="or-text">OR</span>
        </div>
        <div className='other-login'>
            <button className='other-btn'> <AiFillApple size={23} /> Continue with Apple</button>
            <button className='other-btn'> <BsFacebook size={23} color='#3b5998' />  Continue with Facebook</button>
            <button className='other-btn'> <AiOutlineGoogle size={23} className='google-icon' /> Continue with Google</button>

        </div>

        <div className='login-footer'>
            <span>New to Quizify?</span>
            <span><a href="">Get Started</a></span>
        </div>

    </div>
)

export default Login
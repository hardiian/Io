import { ChangeEvent, useState } from 'react'
import '../../style/Sign-In.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import KeyIcon from '@mui/icons-material/Key'
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Icon } from '@mui/material';

const SignIn = () => {

    const [emailValue, setEmailValue] = useState('')
    const [passwordValue , setPasswordValue] = useState('')
    
    const handleEmailChange = (e) => {
            setEmailValue(e.target.value)
    }
    
    const handlePasswordChange = (e) => {
        setPasswordValue(e.target.value)
    }

    return (
        <main className='main-frame'>
            <h2>Art Work</h2>
            <form className='signin-form'>
                <h3>Sign In</h3>
                <div className='ad-textbox'>
                    <input
                        onChange={handleEmailChange}
                        className={emailValue ? "has-email-value" : ""}
                        id='email-textbox'
                        type='email'
                        />
                    <span className='material-symbols-outlined'>
                        <MailOutlineIcon/>
                    </span>
                    <label htmlFor='textbox'>email</label>
                    <div className='underLine' />
                </div>
                <br/>
                <div className='ad-textbox'>
                    <input
                        onChange={handlePasswordChange}
                        className={passwordValue ? "has-password-value" : ""}
                        id='password-textbox'
                        type='password'
                        />
                    <span className='material-symbols-outlined'>
                       <KeyIcon/>
                    </span>
                    <label htmlFor='textbox'>password</label>
                    <div className='underLine' />
                </div>
                <br />
                <section>
                    <div className='button-section'>
                        <label
                            htmlFor='button-signin'
                            className='signin-button'>
                            <input
                                className='sign-in'
                                type='button' id='button-signin'
                                value={'Sign in'}
                                onChange={()=>{}}
                            />
                        </label>
                        <p
                            className='signup-text'
                            onChange={()=>{}}
                        >
                            Sing up
                        </p>
                    </div>
                </section>
                <br />
                <section className='footer-section'>
                    <div className='section'>
                        <p>or sig-in with</p>
                        <div className='section-icon'>    
                            <icon className='google-icon'>
                                <GoogleIcon className='google-icon' onChange={() => { }} />
                            </icon>
                            <icon className='twitter-icon'>
                                <TwitterIcon onChange={() => { }} />
                            </icon>
                            <icon className='fb-icon'>
                                <FacebookIcon onChange={() => { }} />
                            </icon>
                        </div>
                    </div>
                </section>
            </form>
        </main>
    )
}

export default SignIn

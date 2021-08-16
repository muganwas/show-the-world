import React from 'react'
import { Logo } from '../resources'
import './style.css'

const Header = (props) => {
    const { siteTitle } = props;
    return (
        <div id='header-container' className="flex flex-row w-full justify-between px-40 py-10 min-h-50">
            <div id='logo-container' className='flex flex-row justify-between'>
                <Logo id='logo' className='p-0' />
                <span id='site-title' className='font-semibold'>{siteTitle}</span>
            </div>
            <div id='register-login-container' className='flex flex-row justify-center items-center'>
                <a href='/' id='register-button' className='flex flex-row bg-no-repeat justify-center items-center bg-center bg-contain text-secondary'>
                    <span id='register-text' className='font-semibold'>Register</span>
                </a>
                <a id='login-button' href='/' className='flex flex-row justify-center items-center decoration-none'>
                    <span id='login-text' className='font-semibold'>Login</span>
                </a>
            </div>
        </div>
    )
}

export default Header;

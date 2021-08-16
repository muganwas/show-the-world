import React from 'react'
import { Logo } from '../resources'
import './style.css'

const Header = () => {
    return (
        <div className="flex flex-row width-full min-h-50">
            <Logo className='height-5 width-5' />
        </div>
    )
}

export default Header;

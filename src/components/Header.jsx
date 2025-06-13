import React from 'react'
import logo from '../assets/images/svg/logo.svg'

const Header = () => {
    return (
        //navbar
        <nav className='bg-[url(src/assets/images/svg/header-bg.png)] py-5'>
            <div className='max-w-[1140px] mx-auto px-3 '>
                <img src={logo} alt="logo" />
                <div className='flex gap-5'>
                    <a href="" className='font-normal text-base text-white '>About</a>
                    <a href="" className='font-normal text-base text-white' >How It Works</a>
                    <a href="" className='font-normal text-base text-white'>Services</a>
                    <a href="" className='font-normal text-base text-white' >Testimonials</a>
                    <a href="" className='font-normal text-base text-white' >Why Us</a>
                    <a href="" className='font-normal text-base text-white' >FAQ</a>
                    <a href=""> htllp</a>
                </div>
                <button class>
                    Get Started
                </button>
            </div>
        </nav>

    )
}

export default Header
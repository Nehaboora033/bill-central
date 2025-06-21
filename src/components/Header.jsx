import React, { useEffect, useState } from 'react'
import logo from '../assets/images/svg/logo.svg'
import Button from './common/Button'
import headerImage from '../assets/images/png/header-img.png'
import dots from '../assets/images/svg/header-dotspattern.svg'
import backgroundImage from '../assets/images/png/header-bg.png'
import { NAV } from '../utils/helper'



const Header = () => {
    const [state, setIsOpen] = useState(null);
    const [scrolled, setScrolled] = useState(false);

    //scrolled effect 
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        //navbar
        <>
            <div className='bg-cover xl:bg-size-[100%_810px] bg-top bg-no-repeat' style={{backgroundImage:`url(${backgroundImage})`}} >

                <nav className={`py-5  w-full fixed top-0  transition-all duration-200 ease-in-out z-20 ${scrolled ? 'bg-[#0B496F] shadow-lg ' : 'bg-transparent'}`}>
                    <div className='max-w-[1140px] mx-auto px-3 flex items-center justify-between'>
                        <img src={logo} alt="logo" className='cursor-pointer' />
                        <div>
                            <ul className={`flex items-center menulist max-lg:justify-center max-lg:gap-15 z-9  top-0 gap-6 max-lg:flex-col lg:flex-row transition-[right] duration-300  max-lg:h-full max-sm:w-full max-lg:w-[75%] max-lg:bg-[#0B496F] max-lg:fixed ${state === "show" ? 'right-0' : 'max-lg:right-[-100%]'}`}>
                                {NAV.map((items, i) => (
                                    <li key={i} >
                                        <a href="" className='capitalize text-[#E6ECF0] whitespace-nowrap cursor-pointer relative inline-block group' >
                                            {items.name}
                                            <span
                                                className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#E6EDF0] transition-all duration-300 group-hover:w-full rounded"></span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Button buttonText="Get Started" buttonClass='py-2 bg-white px-4 ' />
                            <button onClick={() => setIsOpen(state === "show" ? null : "show")}
                                className='w-[40px] h-[32px]  z-10 flex flex-col justify-between lg:hidden'>
                                <span className={`h-1 w-full bg-white rounded-[50px] transition-all duration-200 ${state === "show" ? 'rotate-[45deg] origin-left' : ''}`}></span>
                                <span className={`h-1 w-full bg-white rounded-[50px] transition-all duration-200 ${state === "show" ? 'hidden' : ''}`}></span>
                                <span className={`h-1 w-full bg-white rounded-[50px] transition-all duration-200 ${state === "show" ? 'rotate-[-45deg] origin-left' : ''}`}></span>
                            </button>

                        </div>

                    </div>
                </nav>
                <div className='max-w-[1140px] mx-auto px-3 pt-[190px] '>
                    <div className='flex flex-wrap mx-[-12px] xl:flex-row flex-col-reverse'>
                        <div className='xl:w-1/2 px-[12px] flex flex-col justify-between'>
                            <div>
                                <p className='font-normal md:text-[64px] text-[56px] text-white xl:max-w-[550px] max-w[50%] w-full'>
                                    Easily Compare<span className='font-bold'> Energy, Gas, And Internet</span> Plans</p>
                                <p className='text-[#E6EDF1] font-normal text-base mt-[16px] mb-[42px]'>Find and switch to the best energy, gas, and internet plans with ease. Our platform simplifies your search, letting you compare providers and make informed decisions, all in one place.</p>

                                <div className='bg-white rounded-tr-[50px] rounded-br-[50px] rounded-bl-[50px] p-[9px] flex w-full max-w-[467px]'>
                                    <input type="text" placeholder='Start typing your address' className='w-full ml-[13px] outline-none border-none pr-[13px]' />
                                    <Button buttonText={"Compare"} buttonClass='bg-[#00A8E8] sm:p-[18px] p-[14px] w-[147px] text-white hover:bg-[#09476C]' svgColor={'stroke-[white]'} />
                                </div>
                            </div>
                            <div>
                                <p className='md:text-[38px] text-[34px] xl:text-[#003459] text-white font-normal xl:max-w-[548px]'>More than <span className='text-[48px] font-bold text-[#00A8E8]'>80,000</span>+ companies trust bill central </p>
                            </div>
                        </div>
                        <div className='xl:w-1/2  px-[12px] relative'>
                            <img src={headerImage} alt="image" className='cursor-pointer relative z-1 block mx-auto ' />
                            <img src={dots} alt="image" className='absolute top-[-57px] max-md:right-0 max-lg:right-[13%] lg:right-[13%] min-[1140px]:right-[-15%] xl:right-[-15%]' />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header
import React from 'react'
import logo from '../assets/images/svg/logo.svg'
import Button from './common/Button'
import headerImage from '../assets/images/png/header-img.png'
import dots from '../assets/images/svg/header-dotspattern.svg'

import { NAV } from '../utils/helper'
import MenuIcon from './MenuIcon'


const Header = () => {
    return (
        //navbar
        <>
            <div className='bg-[url(src/assets/images/png/header-bg.png)] bg-cover lg:bg-size-[100%_810px] bg-top-center bg-no-repeat '>

                <nav className='py-5  w-full '>
                    <div className='max-w-[1140px] mx-auto px-3 flex items-center justify-between'>
                        <img src={logo} alt="logo" className='cursor-pointer' />
                        <div>
                            <ul className='flex items-center menulist max-lg:gap-[100px] max-lg:right-[-100%] gap-6 max-lg:flex-col lg:flex-row  max-lg:justify-center max-lg:h-full max-lg:w-[75%] max-lg:bg-[#0B496F] max-lg:fixed'>
                                {NAV.map((items, i) => (
                                    <li key={i} >
                                        <a href="" className='capitalize text-[#E6ECF0] whitespace-nowrap cursor-pointer relative inline-block group' >
                                            {items.name}
                                            <span
                                                class="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#E6EDF0] transition-all duration-300 group-hover:w-full rounded"></span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Button buttonText="Get Started" buttonClass='py-2 bg-white px-4 ' />
                            <MenuIcon />
                        </div>

                    </div>
                </nav>
                <div className='max-w-[1140px] mx-auto px-3 pt-[110px]'>
                    <div className='flex flex-wrap mx-[-12px]'>
                        <div className='w-1/2 px-[12px] flex flex-col justify-between'>
                            <div>
                                <p className='font-normal text-[64px] text-white max-w-[550px]'>
                                    Easily Compare<span className='font-bold'> Energy, Gas, And Internet</span> Plans</p>
                                <p className='text-[#E6EDF1] font-normal text-base mt-[16px] mb-[42px]'>Find and switch to the best energy, gas, and internet plans with ease. Our platform simplifies your search, letting you compare providers and make informed decisions, all in one place.</p>

                                <div className='bg-white rounded-tr-[50px] rounded-br-[50px] rounded-bl-[50px] p-[9px] flex w-full max-w-[467px]'>
                                    <input type="text" placeholder='Start typing your address' className='w-full ml-[13px] outline-none border-none pr-[13px]' />
                                    <Button buttonText={"Compare"} buttonClass='bg-[#00A8E8] p-[18px] !w-[147px] text-white hover:bg-[#09476C]' svgColor={'stroke-[white]'} />
                                </div>
                            </div>
                            <div>
                                <p className='text-[38px] text-[#003459] font-normal max-w-[548px]'>More than <span className='text-[48px] font-bold text-[#00A8E8]'>80,000</span>+ companies trust bill central </p>
                            </div>
                        </div>
                        <div className='w-1/2  px-[12px] relative'>
                            <img src={headerImage} alt="image" className='cursor-pointer relative z-10' />
                            <img src={dots} alt="image" className='absolute top-[-57px] right-0 xl:right-[-51px]' />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header
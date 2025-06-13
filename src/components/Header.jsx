import React from 'react'
import logo from '../assets/images/svg/logo.svg'
import Button from './common/Button'
import headerImage from '../assets/images/png/header-img.png'
import dots from '../assets/images/svg/header-dotspattern.svg'



const Header = () => {
    return (
        //navbar
        <>
            <div className='bg-[url(src/assets/images/png/header-bg.png)] bg-cover bg-left-bottom bg-no-repeat '>

                <nav className=' py-5'>
                    <div className='max-w-[1140px] mx-auto px-3 flex items-center justify-between'>
                        <img src={logo} alt="logo" />
                        <div className='flex gap-5'>
                            <a href="" className='font-normal text-base text-white '>About</a>
                            <a href="" className='font-normal text-base text-white' >How It Works</a>
                            <a href="" className='font-normal text-base text-white'>Services</a>
                            <a href="" className='font-normal text-base text-white' >Testimonials</a>
                            <a href="" className='font-normal text-base text-white' >Why Us</a>
                            <a href="" className='font-normal text-base text-white' >FAQ</a>

                        </div>
                        <Button buttonText="Get Started" buttonClass='!py-2 !bg-white !px-4' />
                    </div>
                </nav>
                <div className='max-w-[1140px] mx-auto px-3 pt-[122px] pb-[100px] h-[810px]'>
                    <div className='flex flex-wrap mx-[-12px]'>

                        <div className='w-1/2 px-[12px] '>
                            <p className='font-normal text-[64px] text-white max-w-[550px]'>
                                Easily Compare<span className='font-bold'> Energy, Gas, And Internet</span> Plans</p>
                            <p className='text-[#E6EDF1] font-normal text-base mt-[16px] mb-[42px]'>Find and switch to the best energy, gas, and internet plans with ease. Our platform simplifies your search, letting you compare providers and make informed decisions, all in one place.</p>

                            <div className='bg-white rounded-tr-[50px] rounded-br-[50px] rounded-bl-[50px] p-[9px] flex w-full max-w-[467px]'>
                                <input type="text" placeholder='Start typing your address' className='w-full ml-[13px] outline-none border-none pr-[13px]' />
                                <Button buttonText={"Compare"} buttonClass='!bg-[#00A8E8] !p-[18px] !w-[147px] !text-white' svgColor={'stroke-[white]'} />
                            </div>
                        </div>
                        <div className='w-1/2  px-[12px] relative'>
                            <img src={headerImage} alt="image" />
                            <img src={dots} alt="image" className='absolute top-[-57px] right-[-51px]'/>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
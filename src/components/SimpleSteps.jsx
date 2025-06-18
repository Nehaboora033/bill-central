import React from 'react'
import SubHeading from './common/SubHeading'
import { SWITCH_DATA } from '../utils/helper'


const SimpleSteps = () => {
    return (
        <>
            <div className='max-w-[1140px] px-3 mx-auto'>
                <SubHeading subHeading='!text-center' normalText={"Simple Steps to"} boldText={"Switch"} descriptionText={"Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum"} description='!text-center max-w-[610px] mx-auto' />
            </div>
            <div className='max-w-[1440px] mx-auto mt-[58px]'>
                <div className='flex mx-auto relative'>
                    {SWITCH_DATA.map((item, index) => (
                        <div key={index} className='overflow-hidden'>
                            <div className='group relative after:content-[""] after:absolute after:top-0 hover:after:-top-full after:left-0 after:w-full after:h-full after:bg-[#EAF9FFF0] after:transition-all after:duration-400 hover:after:opacity-0'>
                                <p className='absolute w-full z-[1] -rotate-90 font-normal text-[30px] whitespace-nowrap leading-[1.1] mb-[14px] top-[65%] left-1/2 -translate-1/2 m-0 group-hover:-top-full transition-all duration-200'>{item.title}</p>
                                <img src={item.image} alt="img" className='w-full' />
                                <div className='max-w-[360px] py-8 pl-[42px] pr-8 bg-[#003459] absolute group-hover:bottom-0 -bottom-full transition-all duration-200 '>
                                    <p className='font-normal text-[32px] leading-[1.1] text-[#FFFFFF] mb-[14px] '>
                                        {item.title}
                                    </p>
                                    <p className='font-normal text-base text-[#E5EAEE]'>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </>
    )
}

export default SimpleSteps
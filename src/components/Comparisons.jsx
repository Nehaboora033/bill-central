import React, { useState } from 'react'
import SubHeading from './common/SubHeading'
import Image from '../assets/images/png/comparisons-img.png'
import { COMPARISONS_ACCORDIAN } from '../utils/helper'
import { ARROW } from '../utils/Icons'



const Comparisons = () => {
    const [isOpen, setIsOpen] = useState(null);
    return (
        <>
            <div className='max-w-[1140px] mx-auto px-3 py-[162px] '>
                <div className='flex flex-wrap mx-[-12px] lg:flex-row flex-col-reverse gap-6 lg:gap-0'>
                    <div className='lg:w-1/2 w-full px-3'>
                        <SubHeading normalText={"Comprehensive Utility"} boldText={"Comparisons"} subHeading='mb-[46px] text-center lg:text-start lg:max-w-[456px] w-full'/>
                        {COMPARISONS_ACCORDIAN.map((item, index) => {
                            const Svg = item.image;
                            return (
                                <div key={index} className={`p-[14px] max-w-[558px] mx-auto lg:mx-0 border border-[#00000014] rounded-sm mb-6 ${isOpen === index ? 'shadow-lg' : ''}`}>
                                    <div className='flex gap-6'>
                                        <div className={`size-16 rounded-[50%] flex items-center cursor-pointer justify-center transition-all duration-300 max-w-[64px] w-full ${isOpen === index ? 'bg-[#003459]' : 'bg-[#EAF9FF]'} `}>
                                            <Svg className={` transition-all duration-300 cursor-pointer ${isOpen === index ? 'text-white' : 'text-[#007EA7]'}`} />
                                        </div>
                                        <div className='relative overflow-hidden w-full transition-all duration-150'>
                                            <button onClick={() => setIsOpen(isOpen === index ? null : index)} className={`font-normal sm:text-[24px] text-[20px]  text-[#00171F] w-full text-left cursor-pointer py-3 gap-3 flex justify-between items-center ${isOpen === index ? '' : ' mb-2'}`}>
                                                {item.question}
                                                <span className={`${isOpen === index ? 'rotate-180' : 'rotate-0'} transition-all duration-150`}>
                                                   <ARROW/>
                                                </span>
                                            </button>
                                            <p className={`max-w-[442px] w-full font-normal text-base leading-[1.6] text-[#00171F] overflow-auto transition-[max-height] duration-300 ease-in-out ${isOpen === index ? 'max-h-41' : 'max-h-0'
                                                }`}>
                                                {item.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='lg:w-1/2 w-full px-3 '>
                        <img src={Image} alt="image" className=' block  cursor-pointer mx-auto' />
                    </div>
                </div>

            </div>

        </>
    )
}


export default Comparisons


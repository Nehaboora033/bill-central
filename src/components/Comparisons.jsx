import React, { useState } from 'react'
import SubHeading from './common/SubHeading'
import Image from '../assets/images/png/comparisons-img.png'
import { COMPARISONS_ACCORDIAN } from '../utils/helper'



const Comparisons = () => {
    const [isOpen, setIsOpen] = useState(null);
    return (
        <>
            <div className='max-w-[1140px] mx-auto px-3 py-[162px] '>
                <div className='flex flex-wrap mx-[-12px]'>
                    <div className='w-1/2 px-3'>
                        <SubHeading normalText={"Comprehensive Utility"} boldText={"Comparisons"} subHeading='mb-[46px]'/>
                        {COMPARISONS_ACCORDIAN.map((item, index) => {
                            const Svg = item.image;
                            return (

                                <div key={index} className={`border rounded cursor-pointer border-[#EBEBEB] flex gap-6 p-[14px] mb-6  
                                ${isOpen === index ? 'shadow-lg' : ''}`}>
                                    <div className={`rounded-[50%] w-[64px] h-[64px] flex  flex-shrink-0 items-center justify-center ${isOpen === index ? 'bg-[#003459]' : 'bg-[#EAF9FF]'}`}>
                                        <Svg className={`${isOpen === index ? 'text-white' : 'text-[#007EA7]'}`} />
                                    </div>
                                    <div>
                                        <button onClick={() => setIsOpen(isOpen === index ? null : index)} className={`flex text-[24px] leading-[110%] items-center font-normal w-full justify-between text-[#1A2E35] mb-2 transition-all duration-200 cursor-pointer ${isOpen === index ? '' : 'h-full overflow-hidden mb-2'}`}>
                                            {item.question}
                                            <svg className={`${isOpen === index ? 'rotate-180' : 'rotate-0'} cursor-pointer transition-transform duration-200`}
                                                width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.330173 1.2133C0.541647 0.992935 0.828428 0.869141 1.12745 0.869141C1.42648 0.869141 1.71326 0.992935 1.92473 1.2133L7.50681 7.03183L13.0889 1.2133C13.3016 0.999181 13.5864 0.8807 13.8821 0.883379C14.1778 0.886057 14.4606 1.00968 14.6697 1.22762C14.8788 1.44556 14.9974 1.74038 15 2.04858C15.0025 2.35678 14.8889 2.65371 14.6834 2.8754L8.30409 9.52498C8.09261 9.74535 7.80583 9.86914 7.50681 9.86914C7.20778 9.86914 6.921 9.74535 6.70953 9.52498L0.330173 2.8754C0.118763 2.65497 -6.49944e-08 2.35604 -5.137e-08 2.04435C-3.77456e-08 1.73266 0.118763 1.43373 0.330173 1.2133Z" fill="#00171F" />
                                            </svg>

                                        </button>
                                        <p className={`text-[#1A2E35] transition-all duration-200 ${isOpen === index ? 'max-h-[200px]' : 'h-0 overflow-hidden '}`}>{item.answer}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='w-1/2 px-3'>
                        <img src={Image} alt="image" className='w-full' />
                    </div>
                </div>

            </div>

        </>
    )
}


export default Comparisons
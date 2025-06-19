import React, { useState } from 'react'
import SubHeading from './common/SubHeading'
import { SUBTRACT_ICON } from '../utils/Icons'
import { ADD_ICON } from '../utils/Icons'
import { FAQ_DATA } from '../utils/helper'

const FAQ = () => {
    const [isOpen, setIsOpen] = useState(null);
    return (
        <>

            <div className='mx-auto max-w-[1140px] px-3 pb-[162px]'>
                <SubHeading normalText={"Frequently Asked "} boldText={"Questions"} subHeading='text-center' descriptionText={"Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum"} description='mx-auto text-center max-w-[556px] mb-[52px]' />
                <div className='max-w-[916px] mx-auto px-3'>

                    {FAQ_DATA.map((item, index) => {
                        return (
                            <div key={index} className={`px-6 py-[26px] rounded shadow-lg mb-6 transition-colors duration-200 ease-in-out ${isOpen === index ? "bg-[#003459]" : "bg-white"}`}>
                                <button onClick={() => setIsOpen(isOpen === index ? null : index)} className={`font-noraml text-2xl  w-full flex justify-between  items-center  ${isOpen===index?"text-white":""} `}>
                                    {item.question}
                                    <span className={`w-[28px] h-[28px] rounded-full border-2 border-[#00171F] flex items-center justify-center ${isOpen===index?"border-white":""}`}>{isOpen === index ? <SUBTRACT_ICON /> : <ADD_ICON />}</span>
                                </button>
                                <p className={`font-noraml text-base  transition-all duration-200 ease-in-out pt-[14px] max-w-[722px] overflow-hidden ${isOpen === index ? "text-white" : ""} ${isOpen===index?"max-h-[150px]":"max-h-0"}`}>{item.answer}</p>
                            </div>
                        )
                    })}
                </div>

            </div>

        </>
    )
}

export default FAQ


 
import React from 'react'
import Arrow from '../assets/images/svg/acccordian-arrow.svg'


const Accordian = ({ headerText, contentText,svg }) => {
    return (
        <div className='accordian-item border-[#EBEBEB] border rounded cursor-pointer p-[14px] mb-[24px]'>
            <button className='accordian-header flex items-center justify-center gap-[24px] font-normal text-2xl'>
                <div className='w-[64px] h-[64px] bg-[#EAF9FF] rounded-[50%] flex items-center justify-center cursor-pointer' >
                   {svg}
                </div>
                {headerText}
                <img src={Arrow} alt="arrow" className='cursor-pointer'/>

            </button>
            <div className='accordian-content font-normal text-base overflow-hidden max-h-0 mt-2'>
                {contentText}
            </div>
        </div>
    )
}

export default Accordian
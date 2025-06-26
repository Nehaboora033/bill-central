import React from 'react'
import Button from './Button'

const Input = ({ placeholderText, buttonClass, buttonText, svgColor, Inputclass }) => {
    return (
        <>
            <label className={`bg-white rounded-tr-[50px] rounded-br-[50px] rounded-bl-[50px] border border-[#CBCBCB] p-[9px] flex w-full max-w-[467px] ${Inputclass}`}>
                <input type="email" placeholder={`${placeholderText}`} className={`w-full  ml-[13px]  p-[9px] placeholder-text-[#7F8A8E] placeholder-font-normal placeholder-text-base pr-[13px] `} />
                <Button buttonClass={`${buttonClass}`} buttonText={`${buttonText}`} svgColor={`${svgColor}`} />
            </label>

        </>
    )
}

export default Input
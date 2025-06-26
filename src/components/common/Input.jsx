import React from 'react'
import Button from './Button'

const Input = ({ placeholderText, buttonClass, buttonText, svgColor, Inputclass }) => {
    return (
        <>
            <div className={`bg-white rounded-tr-[50px] rounded-br-[50px] rounded-bl-[50px] p-[9px] flex w-full max-w-[467px] ${Inputclass}`}>
                <input type="email" placeholder={`${placeholderText}`} className={`w-full ml-[13px]  p-[9px] placeholder-text-[#7F8A8E] placeholder-font-normal placeholder-text-base outline-none border-none pr-[13px] `} />
                <Button buttonClass={`${buttonClass}`} buttonText={`${buttonText}`} svgColor={`${svgColor}`} />
            </div>

        </>
    )
}

export default Input
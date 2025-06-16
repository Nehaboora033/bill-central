import React from 'react'

const SubHeading = ({ normalText, boldText, subHeading = "" , descriptionText ,description=""}) => {
  return (
    <>
      <p className={`text-[#00171F] font-normal text-[48px] ${subHeading}`}>{normalText} <span className={`font-bold text-[48px]`}>{boldText}</span></p>
      <p className={`font-normal text-base text-[#1A2E35] ${description}` }>{descriptionText}</p>
    </>
  )
}

export default SubHeading
import React from 'react'

const SubHeading = ({ normalText, boldText, subHeading = "" , descriptionText ,description="",}) => {
  return (
    <>
      <p className={`text-[#00171F] font-normal md:text-[48px] text-[40px] ${subHeading}`}>{normalText} <span className={`font-bold md:text-[48px] text-[40px]`}>{boldText}</span></p>
      <p className={`font-normal text-base text-[#1A2E35] mt-[16px] ${description}` }>{descriptionText}</p>
    </>
  )
}
export default SubHeading 
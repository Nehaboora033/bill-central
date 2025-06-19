import React from 'react'
import SubHeading from './common/SubHeading'
import Button from './common/Button'

const Newsletter = () => {
    return (
        <>
            <div className='bg-[linear-gradient(to_bottom,_#FFFFFF_50%,_#043C64_50%)]'>
                <div className='max-w-[1140px] rounded px-3 mx-auto bg-[url(src/assets/images/png/bg-Newsletter.png)] bg-no-repeat bg-cover py-[54px] '>
                    <SubHeading normalText={"Join Our "} boldText={"Newsletter"} subHeading='text-center' descriptionText={"Stay up to date with the latest deals, energy-saving tips, and exclusive offers! Sign up for our newsletter and never miss out on great savings opportunities again."} description='text-center max-w-[620px] mx-auto' />
                    <div className='bg-white rounded-tr-[50px] rounded-br-[50px] rounded-bl-[50px] p-[9px] flex w-full max-w-[467px] mt-[38px] mx-auto'>
                        <input type="text" placeholder='Start typing your address' className='w-full ml-[13px] outline-none border-none pr-[13px]' />
                        <Button buttonText={"Compare"} buttonClass='bg-[#007EA7] p-[12px] !w-[147px] text-white hover:bg-[#09476C]' svgColor={'stroke-[white]'} />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Newsletter
import React from 'react'
import SubHeading from './common/SubHeading'
import Button from './common/Button'
import newsletterBackground from '../assets/images/png/bg-Newsletter.png'
import Input from './common/Input'

const Newsletter = () => {
    return (
        <>

            <div className='max-w-[1140px] translate-y-1/2 rounded px-3 mx-[12px] min-[1170px]:mx-auto bg-no-repeat bg-cover py-[54px] ' style={{ backgroundImage: `url(${newsletterBackground})` }}>
                <SubHeading normalText={"Join Our "} boldText={"Newsletter"} subHeading='text-center' descriptionText={"Stay up to date with the latest deals, energy-saving tips, and exclusive offers! Sign up for our newsletter and never miss out on great savings opportunities again."} description='text-center max-w-[620px] mx-auto mb-[38px]' />
                <Input placeholderText={"Enter your email"} buttonText={"Submit"} buttonClass="bg-[#00A8E8] text-white py-[15px] px-5" svgColor={'stroke-[white]'} Inputclass={"mx-auto"} />
            </div>

        </>

    )
}

export default Newsletter
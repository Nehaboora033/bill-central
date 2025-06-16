import React from 'react'
import SubHeading from './common/SubHeading'
import Review from '../assets/images/png/review.png'
import Pointer from '../assets/images/svg/pointer.svg'
import { UTILITIES_CARD } from '../utils/helper'

const Utilities = () => {
    return (
        <>
            <div className='max-w-[1140px] mx-auto px-3 '>
                <SubHeading normalText={"Why Choose Us for"} boldText={"Utilities"} subHeading='!text-center' descriptionText={"This emphasizes both the action and the benefits, drawing in potential customers with a clear value proposition. Let me know if you'd like any adjustments!"} description={'mx-auto max-w-[620px] text-center'} />
            </div>
            <div className='max-w-[1140px] mx-auto px-3 mt-[58px]'>

                <div className='flex gap-[24px]'>
                    {/* left box */}
                    <div className='max-w-[424px] bg-[#003459] p-[40px]'>
                        <img src={Review} alt="review" />
                        <p className='font-normal text-2xl text-white'>Tailored Recommendations</p>
                        <p className='font-normal text-2xl text-[#E5EBEE] mt-3'>Our platform analyzes your unique energy needs and preferences to suggest the best utility providers, ensuring you get the most personalized options available.</p>
                        <button className='w-[64px] h-[52px] bg-white rounded-[446px] flex items-center justify-center mt-[22px] cursor-pointer'>
                            <img src={Pointer} alt="pointer" />
                        </button>
                    </div>
                    <div className='grid grid-cols-2 gap-[24px]'>
                        {UTILITIES_CARD.map((card, index) => (
                            <div key={index} className='border border-[#E5E8E9] rounded p-6 max-w-[334px] shadow-lg'>
                                <img src={card.icon} alt="image" />
                                    <p className='font-normal text-2xl  text-[#010101] mt-[18px]'>{card.title}</p>
                                    <p className='font-normal text-base text-[#1A2E35] mt-3'>{card.description}</p>
                            </div>
                        ))
                        }

                    </div>
                </div>

            </div>
        </>
    )
}

export default Utilities
import React from 'react'
import SubHeading from './common/SubHeading'
import Image from '../assets/images/png/comparisons-img.png'
import Accordian from './Accordian'

const Comparisons = () => {
    return (
        <>
            <div className='max-w-[1140px] mx-auto px-3 py-[162px] '>
                <div className='flex flex-wrap mx-[-12px]'>
                    <div className='w-1/2 px-3'>
                        <SubHeading normalText={"Comprehensive Utility"} boldText={"Comparisons"} />
                        <Accordian />
                        <Accordian />
                        <Accordian />
                        <Accordian/>
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
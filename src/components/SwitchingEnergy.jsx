import React from 'react'
import Image from '../assets/images/png/switchingenergy-img.png'
import Button from './common/Button'

const SwitchingEnergy = () => {
    return (
        <>
            <div className='max-w-[1140px] mx-auto px-3 py-[162px]'>
                <div className='flex flex-wrap mx-[-12px]'>
                    <div className='lg:w-1/2 px-3 w-full'>
                        <img src={Image} alt="image" className=' block mx-auto lg:mx-0 ' />
                    </div>
                    <div className='lg:w-1/2 px-3 w-full'>
                        <p className='md:text-[48px] text-[40px] font-normal lg:max-w-[409px] w-full'><span className='font-semibold text-[#00171F]'>Switching Energy</span> Made Simple</p>
                        <p className='font-normal text-base text-[#1A2E35]  lg:max-w-[409px] w-full mt-5 lg:mt-0'>Say goodbye to confusing energy plans! We simplify the process by providing clear and competitive electricity and gas recommendations. Whether you're moving or just seeking a better deal, our platform connects you with the best energy providers quickly and easily, helping you save on energy bills.</p>
                        <div>
                            <p className='text-[#003459] font-normal sm:text-3xl text-2xl mt-[38px] mb-[28px]'>Benefits of Comparing Energy Plans</p>
                            <ul className='list-disc list-inside '>
                                <li className='text-[#1A2E35] sm:text-base text-[14px] font-normal sm:ml-4 ml-2'>Save money by finding cheaper deals.</li>
                                <li className='text-[#1A2E35] sm:text-base text-[14px] font-normal sm:ml-4 ml-2'>Get better customer service.</li>
                                <li className='text-[#1A2E35] sm:text-base text-[14px] font-normal sm:ml-4 ml-2'>Explore greener, more sustainable energy options.</li>
                            </ul>
                            <Button buttonText={"Compare With Us"} buttonClass='bg-[#00A8E8] text-white py-[15px] px-[20px] mt-[42px] hover:bg-[#0A486E] ' svgColor={'stroke-[white]'} />
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default SwitchingEnergy
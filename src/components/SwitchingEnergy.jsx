import React from 'react'
import Image from '../assets/images/png/switchingenergy-img.png'

const SwitchingEnergy = () => {
    return (
        <>
            <div className='max-w-[1140px] mx-auto px-3 py-[162px]'>
                <div className='flex flex-wrap mx-[-12px]'>
                    <div className='w-1/2 px-3'>
                        <img src={Image} alt="image" />
                    </div>
                    <div className='w-1/2 px-3'>
                        <p className='text-[48px] font-normal max-w-[409px] w-full'><span className='font-semibold text-[#00171F]'>Switching Energy</span> Made Simple</p>
                        <p className='font-normal text-base text-[#1A2E35] max-w-[409px] w-full'>Say goodbye to confusing energy plans! We simplify the process by providing clear and competitive electricity and gas recommendations. Whether you're moving or just seeking a better deal, our platform connects you with the best energy providers quickly and easily, helping you save on energy bills.</p>
                        <div>
                            <p className='text-[#003459] font-normal text-3xl mt-[38px] mb-[28px]'>Benefits of Comparing Energy Plans</p>
                            <ul className='list-disc list-inside '>
                                <li className='text-[#1A2E35] text-base font-normal ml-4'>Save money by finding cheaper deals.</li>
                                <li className='text-[#1A2E35] text-base font-normal ml-4'>Get better customer service.</li>
                                <li className='text-[#1A2E35] text-base font-normal ml-4'>Explore greener, more sustainable energy options.</li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default SwitchingEnergy
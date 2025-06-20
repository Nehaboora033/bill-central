import React, { useEffect, useState } from 'react'
import SubHeading from './common/SubHeading'
import { SWITCH_DATA } from '../utils/helper'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SimpleSteps = () => {
    const [isSlider, setIsSlider] = useState(window.innerWidth < 1378);

    useEffect(() => {
        const handleResize = () => {
            setIsSlider(window.innerWidth < 1378);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <>
            <div className='max-w-[1140px] px-3 mx-auto'>
                <SubHeading subHeading='!text-center' normalText={"Simple Steps to"} boldText={"Switch"} descriptionText={"Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum"} description='!text-center max-w-[610px] mx-auto' />
            </div>
            <div className="px-3 mt-[58px]">
                {isSlider ? (
                    <Swiper
                        breakpoints={{
                            450: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                        }}
                        modules={[Autoplay]}
                        autoplay={false}>
                        {SWITCH_DATA.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Card item={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4">
                        {SWITCH_DATA.map((item, index) => (
                            <div key={index}>
                                <Card item={item} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}
function Card({ item }) {
    return (
        <div className="overflow-hidden">
            <div className='group relative after:content-[""] after:absolute after:top-0 hover:after:-top-full after:left-0 after:w-full after:h-full after:bg-[#EAF9FFF0] after:transition-all after:duration-400 hover:after:opacity-0'>
                <p className='absolute w-full z-[1] -rotate-90 font-normal  text-[20px] md:text-[25px] lg:text-[32px] leading-[1.1]  top-[70%] lg:top-[65%] left-1/2 -translate-1/2 group-hover:-top-full transition-all duration-400 whitespace-nowrap'>{item.title}</p>
                <img src={item.image} alt="image" className='w-full' />
                <div className='py-8 pl-[42px] pr-8 bg-[#003459] absolute group-hover:bottom-0 -bottom-full transition-all duration-200'>
                    <p className='font-normal text-[26px] leading-[1.1] text-[#FFFFFF] mb-[14px]'>{item.title}</p>
                    <p className='font-normal text-base text-[#E5EAEE]'>{item.description}</p>
                </div>
            </div>
        </div>
    );
}


export default SimpleSteps
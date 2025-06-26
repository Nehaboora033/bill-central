import React from 'react'
import SubHeading from './common/SubHeading'
import { TESTIMONIALS_SLIDER } from '../utils/helper'
import Slider from 'react-slick'
import { PREVIOUS_ARROW } from '../utils/Icons'
import { NEXT_ARROW } from '../utils/Icons'

const PreviousArrow = ({ onClick }) => (
    <button onClick={onClick}
        className='w-[40px] h-[40px] rounded-full cursor-pointer border border-[#00171F] flex items-center justify-center  active:bg-black absolute xl:top-1/2 md:top-[115%] xl:left-[-60px]  -translate-y-1/2 max-md:hidden group'>
        <PREVIOUS_ARROW />
    </button>
);

const NextArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="w-[40px] h-[40px] rounded-full cursor-pointer border border-[#00171F] flex items-center justify-center max-md:hidden active:bg-black absolute xl:top-1/2 xl:right-[-55px] md:right-[0px] md:top-[115%] -translate-y-1/2  text-[#00171F] group">
        <NEXT_ARROW />
    </button>
);

const Testimonials = () => {
    const settings = {
        dots: false,
        speed: 400,
        slidesToShow: 3,
        sliddesToScroll: 1,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 700,
        prevArrow: <PreviousArrow />,
        nextArrow: <NextArrow />,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                }
            }
        ]


    };
    return (
        <>
            <div className='max-w-[1140px] px-3 mx-auto py-[162px]'>
                <SubHeading normalText={"Our"} boldText={"Testimonials"} subHeading='text-center' descriptionText={"Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum"} description='mx-auto text-center max-w-[490px] mb-[62px]' />
                <div className='max-w-[1140px] mx-auto px-3 '>
                    <Slider {...settings}>
                        {TESTIMONIALS_SLIDER.map((item, index) => (
                            <div key={index} className='px-4'>
                                <div className='p-5 border px-4 border-[#E5E5E5] rounded shadow-md max-w-[364px] w-full'>

                                    <div className='flex gap-[8px]'>
                                        <img src={item.image} alt="image" />
                                        <div>
                                            <p className='text-2xl font-nornal '>{item.name}</p>
                                            <p className='text-[#808080] text-base font-noraml mt-[2px]'>{item.handle}</p>

                                        </div>
                                    </div>
                                    <img src={item.rating} alt="rating" className='mt-6 ' />
                                    <p className='text-base text-noraml text-[#1A2E35] mt-[18px]'>Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio  adipiscing elit vitae vestibulum vestibulum.</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        </>
    )
}

export default Testimonials
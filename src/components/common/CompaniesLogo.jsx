import React from 'react'
import { COMPANIES_LOGO } from '../../utils/helper';
import Slider from "react-slick";


const CompaniesLogo = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 4000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows:false,
        slidesToShow: 7,
        slidesToScroll: 1,
      };

    return (
        <div className=' max-w-[1140px] mx-auto px-3 pt-[64px] cursor-pointer'>
            <Slider {...settings}>
                {COMPANIES_LOGO.map((items, i) => (
                    <div key={i}>
                        <img src={items.image} alt={`slide-${i}`} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default CompaniesLogo
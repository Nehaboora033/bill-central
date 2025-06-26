import React from 'react'
import footerLogo from '../assets/images/svg/footer-logo.svg'
import { SOCIAL_LINKS } from '../utils/Icons';
import { FOOTER_LINKS, FOOTER_LINKS2 } from '../utils/helper';
import footerBackground from '../assets/images/png/bg-Footer.png'

const Footer = () => {
  const date = new Date();
  return (
    <>
      <div className='bg-[url(src/assets/images/png/bg-Footer.png)] bg-center bg-cover bg-no-repeat pt-[232px]' style={{ backgroundImage: `url(${footerBackground})` }}>
        <div className='max-w-[1140px] mx-auto px-3'>
          <div className='flex justify-between pt-[68px] sm:flex-row flex-col '>
            <div>
              <img src={footerLogo} alt="logo" className='cursor-pointer hover:scale-105' />
              <p className='max-w-[297px] text-[#E6EBEF] font-normal text-base mt-[28px]'>Ut auctor nisi mauris eu tincidunt facilisi. Diam amet sollicitudin pretium maecenas ornare lacus arcu adipiscing. </p>
              <p className='font-semibold text-[20px] text-white mt-[36px]'>Follow Us</p>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((item, index) => {
                  return (
                    <div key={index} className="w-[33px] h-[33px] flex justify-center mt-4 mb-[56px] items-center cursor-pointer border border-white rounded-full hover:-translate-y-2.5">
                      <a href={item.href} target="_blank"
                        rel="social links">{item.icon}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='flex gap-[78px]'>
              <ul>
                <li className='text-white text-[20px] font-bold mb-3 '>Quick Link</li>
                {FOOTER_LINKS.map((item, index) => (
                  <li key={index} className='mb-4'>
                    <a href="" className='text-[#E6EBEF] text-base font-normal whitespace-nowrap capitalize relative group inline-block '>{item.name}
                      <span
                        className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#E6EDF0] transition-all duration-300 group-hover:w-full rounded"></span>
                    </a>

                  </li>
                ))}
              </ul>
              <ul>
                <li className='text-white text-[20px] font-bold mb-3 '>Services</li>
                {FOOTER_LINKS2.map((item, index) => (
                  <li key={index} className='mb-4'>
                    <a href="" className='text-[#E6EBEF] text-base font-normal whitespace-nowrap relative capitalize group inline-block '>{item.name}
                      <span
                        className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#E6EDF0] transition-all duration-300 group-hover:w-full rounded"></span>
                    </a>

                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='py-5 border-t border-[#34607E] '>
          <a href="" className='text-[14px] font-noraml text-[#E6EBEF] block text-center hover:text-[#b0afaf]'>© {date.getFullYear()} BILL CENTRAL, Inc. All Rights Reserved.</a>
        </div>
      </div>
    </>

  )
}

export default Footer
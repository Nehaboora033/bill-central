import React from 'react'
import footerLogo from '../assets/images/svg/footer-logo.svg'
import { SOCIAL_LINKS } from '../utils/Icons';
import { FOOTER_LINKS } from '../utils/helper';


const Footer = () => {
  return (
    <>
      <div className='bg-[url(src/assets/images/png/bg-Footer.png)] bg-center bg-cover bg-no-repeat'>
        <div className='max-w-[1140px] mx-auto px-3'>
          <div className='flex justify-between pt-[68px]'>
            <div>
              <img src={footerLogo} alt="logo" className='cursor-pointer hover:scale-105' />
              <p className='max-w-[297px] text-[#E6EBEF] font-normal text-base mt-[28px]'>Ut auctor nisi mauris eu tincidunt facilisi. Diam amet sollicitudin pretium maecenas ornare lacus arcu adipiscing. </p>
              <p className='font-semibold text-[20px] text-white mt-[36px]'>Follow Us</p>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((item, index) => {
                  return (
                    <a
                      href={item.href}
                      key={index}
                      className="group w-[33px] h-[33px] flex justify-center mt-4 mb-[56px] items-center border border-white rounded-full hover:border-[#00A8E8] transition-colors"
                      target="_blank"
                      rel="social links">{item.icon}
                    </a>
                  );
                })}
              </div>
            </div>
            <div className='flex gap-[78px]'>
              <ul>
                <li className='text-white text-[20px] font-bold mb-3 '>Quick Link</li>
                {FOOTER_LINKS.map((item, index) => (
                  <li key={index} className='mb-4'>
                    <a href="" className='text-[#E6EBEF] text-base font-normal whitespace-nowrap capitalize hover:text-[#00A8E8] transition-colors'>{item.name}</a>
                  </li>
                ))}
              </ul>
              <ul>
                <li className='text-white text-[20px] font-bold mb-3 '>Services</li>
                <li className='mb-4'><a href="" className='text-[#E6EBEF] text-base font-normal whitespace-nowrap capitalize  hover:text-[#00A8E8] transition-colors'>Privacy Policy</a></li>
                <li><a href="" className='text-[#E6EBEF] text-base font-normal whitespace-nowrap capitalize hover:text-[#00A8E8] transition-colors'>Terms of Services</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Footer
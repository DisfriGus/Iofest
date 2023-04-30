import React from 'react'
import Logo from '../../Assets/_logo/_logo/_logo_1x.webp'
import { TbBrandFacebook, TbBrandInstagram, TbBrandTwitter } from 'react-icons/tb'
const Footer = () => {
  return (
    <div className='w-full bg-[#161C2D] text-white px-[120px] py-[72px] flex justify-around items-start'  >
        <div className=''>
            <img src={Logo} alt="" className='mb-6' />
            <p className='subtitle1 text-white mb-6'>Be part of our community in <span className='font-bold'>Menjelajah!</span></p>
            <div className='flex text-[24px] gap-[20px]'>
                <TbBrandInstagram/>
                <TbBrandTwitter/>
                <TbBrandFacebook/>
            </div>
        </div>
        <div>
            <p className="subHeading text-white mb-6">Travel Categories</p>
            <div className='flex flex-col gap-[12px] subtitle1 text-white'>
                <p>Attractions</p>
                <p>Beach</p>
                <p>Culinery</p>
                <p>Mountain</p>
                <p>Museum</p>
            </div>
        </div>
        <div>
            <p className="subHeading text-white mb-6">Links</p>
            <div className='flex flex-col gap-[12px] subtitle1 text-white'>
                <p>Blog Post</p>
                <p>Contact Us</p>
                <p>Exploration</p>
                <p>Recommendation</p>
            </div>
        </div>
        <div>
            <p className="subHeading text-white mb-6">Legal</p>
            <div className='flex flex-col gap-[12px] subtitle1 text-white'>
                <p>Cookie Policy</p>
                <p>Privacy & Policy</p>
                <p>Terms & Condition</p>
                <p>Travelers Terms</p>
            </div>
        </div>
        
    </div>
  )
}

export default Footer
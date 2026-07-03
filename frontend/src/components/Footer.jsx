import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className=''>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div >
                <img className='mb-5 w-32' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, velit, dolor enim blanditiis libero pariatur adipisci facere impedit quibusdam voluptates nihil et. Tenetur non corporis eligendi porro ex exercitationem maxime.
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-212-456-7890</li>
                    <li>contact@luxeva.com</li>
                </ul>
            </div>

        </div>

        <div className=''>
            <hr className='text-gray-300'/>
            <p className='py-5 text-sm text-center'>Copyright 2024 luxeva.com - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
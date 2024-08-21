import React from 'react'
import LinkItems from '../helpers/LinkItem';
import { FaFacebook, FaWhatsapp, FaViber, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";


const Footer = () => {
    return (
        <div className='w-full py-6 px-4 grid place-items-center mb-3'>
            <div className='xl:w-[90%] w-full p-2 bg-red-50'>
                <div className='w-full flex flex-col sm:flex-col md:flex-row justify-around '>
                    <div className='md:w-[24%] sm:w-full h-full py-2 px-4 flex flex-col gap-4 '>
                        <div><a href='/' className='text-green-700 font-bold text-[25px]'>SarSafai</a></div>
                        <div>
                            <p style={{fontSize: '17px'}}>We are committed to the best quality in the field of industrial cleaning, home and garden cleaning. We work with a passion of taking challenges.</p>
                        </div>
                        <div>
                            <p>Let's connect with our socials</p>
                            <div className='mt-1'>
                                <ul className='flex gap-2'>
                                    {socialLink.map((item, index) => (
                                        <LinkItems key={item + index} link={item[0]} item={item[1]} target='_blank' />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                    <div className='md:w-[24%] sm:w-full h-full py-2 px-4 flex flex-col gap-4 '>
                        <h3 className='text-[26px] font-bold tracking-tighter capitalize'>services</h3>
                        <div className='mt-2'>
                            <ul className='flex flex-col gap-1 text-[16px] font-[400]'>
                                {serviceLink.map((item, index) => (
                                    <LinkItems key={item + index} link={item[0]} item={item[1]} />
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='md:w-[24%] sm:w-full h-full py-2 px-4 flex flex-col gap-4 '>
                        <h3 className='text-[26px] font-bold tracking-tighter capitalize'>Quick Links</h3>
                        <div className='mt-2'>
                            <ul className='flex flex-col gap-1 text-[16px] font-[400]'>
                                {quickLink.map((item, index) => (
                                    <LinkItems key={item + index} link={item[0]} item={item[1]} />
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='md:w-[24%] sm:w-full h-full py-2 px-4 flex flex-col gap-4 '>
                        <h3 className='text-[26px] font-bold tracking-tighter capitalize'>Address</h3>
                        <div className='mt-2'>
                            <ul className='flex flex-col gap-1 text-[16px] font-[400]'>
                                {address.map((item, index) => (
                                    <LinkItems key={item + index} link={item[0]} item={item[1]} target='_blank' />
                                ))}
                            </ul>
                            <div className='mt-3 bg-red-500 flex'>
                                <input type='email' placeholder='Your email address'
                                    className='bg-white border-none outline-none py-2 px-4  '
                                />
                                <button className='w-full grid place-items-center bg-blue-800'>
                                    <IoIosSend size={25} color='white' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full py-2 px-4 mt-7 grid place-items-center border-t border-red-500'>
                    <div className='w-[80%] grid place-items-center'>
                        <p className='font-[700]'>2022 &#169; All rights	&#174; reserved by <a href='/' className='text-green-700 font-bold' style={{fontSize:'18px'}}>SarSafai</a>.Designed by <a href='http://webstark.net/' className='text-blue-700 font-bold' style={{fontSize:'18px'}} target='_blank'>WebStark.</a> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const socialLink = [
    ['http://facebook.com', <FaFacebook size={30} color='#3B5998' />],
    ['http://whatsapp.com', <FaWhatsapp size={30} color='#25D366' />],
    ['http://viber.com', <FaViber size={30} color='#3B5998' />],
    ['http://facebook.com', <FaLinkedin size={30} color='#0A66C2' />],
    ['http://facebook.com', <FaInstagramSquare size={30} color='#bc2a8d' />],
]
const serviceLink = [
    ['#', 'Carpet Cleaning'],
    ['#', 'Commercial Cleaning'],
    ['#', 'Sofa Cleaning'],
    ['#', 'Tiles Cleaning'],
    ['#', 'Office Cleaning'],
    ['#', 'Water Tank Cleaning'],
]
const quickLink = [
    ['/', 'Home'],
    ['/our-service', 'Our Service'],
    ['/about-us', 'About Us'],
    ['/contact-us', 'Contact Us'],
    ['/faq', 'FAQ'],
]
const address = [
    ['https://maps.app.goo.gl/vWmGxBozX7bqNG7s6', 'Koteswore-26, Kathmandu'],
    ['tel:9851190608', '+977-9851190608'],
    ['tel:9802267900', '+977-9802267900'],
    ['mailto:info@hitechcleaning.com.np', 'info@hitechcleaning.com.np'],
]

export default Footer 
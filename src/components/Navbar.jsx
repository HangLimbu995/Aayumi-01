import React, { useEffect, useState } from 'react'
import { IoIosMenu } from "react-icons/io";
import gsap from 'gsap'
import { Link } from 'react-router-dom';
import SideNavbar from './SideNavbar';

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(true)

  useEffect(() => {
    const a = document.querySelectorAll('.nav a')

    gsap.fromTo(a, {
      opacity: 0,
      y: -20,
    }, {
      opacity: 1,
      y: 0,
      stagger: 0.3,
    })


  }, [])

  useEffect(() => {
    const nav = document.querySelector('.nav')
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 10) {
        nav.classList.add('bg-nav')
      }
      else {
        nav.classList.remove('bg-nav'); // Moved inside the else block
      }
    }

    const body = document.querySelector('body')

    // window.addEventListener('scroll', handleScroll)
    body.addEventListener('scroll', handleScroll)


    return () => {
      body.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const navSidebar = document.querySelector('.navSidebar')
    const menu = document.querySelector('.menu')
    navSidebar.style.transition = '0.5s ease'
    if (navMenu) {
      navSidebar.style.transform = 'translateX(100%)'
      menu.style.color = '#000'
    } else {
      navSidebar.style.transform = 'translateX(0%)'
      menu.style.color = '#fff'
    }
  }, [navMenu])

  return (
    <div className='nav absolute w-full grid place-items-center ' id='nav' style={{ zIndex: 100 }} >
      <div className='w-[90vw] flex justify-between items-center py-2 px-2'>
        <div className=' overflow-hidden'>
          <Link to='/' className='logo text-[25px] font-[700] hover-target '>
            Aayumi
          </Link>
        </div>
        <div>
          <ul className='flex gap-9 text-white font-bold'>
            <li><Link to='/' className=' hidden md:block '>home</Link>
            </li>
            <li className='service'><Link to='/our-services' className='hidden md:block'>our service</Link>
            </li>
            <li className='about'><Link to='/about-us' className='hidden md:block'>about us</Link>
            </li>
            <li><Link to='/contact-us' className='hidden md:block'>contact us</Link></li>
            <li><Link to='/faq' className='hidden md:block'>faq</Link></li>
            <button onClick={() => setNavMenu(!navMenu)} className="menu magnet sticky top-3 md:hidden sm:block" style={{ zIndex: 1000 }} data-scroll data-scroll-sticky data-scroll-target='#main'>
              <IoIosMenu size={35} fontWeight={900} />
            </button>
          </ul>
        </div>
      </div>
      <SideNavbar navMenu={navMenu} setNavMenu={setNavMenu} />
    </div>
  )
}

export default Navbar
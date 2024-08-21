
import { useEffect, useRef, useState } from 'react'
import './App.css'
import PreLoader from './components/PreLoader'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router'
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

gsap.registerPlugin(ScrollTrigger)
function App() {
  const scrollRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true)

 
  useEffect(() => {
    if (scrollRef.current) {
      const locoScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.1, // Linear interpolation, 0 to 1 (0 is slow, 1 is fast)
        direction: 'vertical', // Could also be 'horizontal'
        class: 'is-reveal', // The class applied to sections when they are revealed
        multiplier: 1, // Adjust the scroll speed (optional)
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      });

      // Update Locomotive Scroll on window resize
      window.addEventListener('resize', locoScroll.update);

      // Cleanup on unmount
      return () => {
        locoScroll.destroy();
        window.removeEventListener('resize', locoScroll.update);
      };
    }
  }, []);

useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false)
  }, 10)
  // TODO make the timer 8000

  return () => clearTimeout(timer)
}, [])

return (
  <div className='overflow-x-hidden' >
    {
      isLoading ? (<div className='relative w-full h-full grid place-items-center' >
        {/* TODO import <PreLoader/> */}
      </div>) : (
        <div ref={scrollRef} className='main relative w-full min-h-[100vh] overflow-x-hidden' data-scroll-container>
          <Navbar />
          <main className='relative'>
            <Outlet />
          </main>
          <Footer />
        </div>
      )
    }
  </div>
)
}

export default App

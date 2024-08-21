import React, { useEffect, useState } from 'react'
import skyC from '../assets/sky.jpg'
import { Link } from 'react-router-dom'
import ProjectCard from '../helpers/ProjectCard'


const Home = () => {
  const [showIndex, setShowIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowIndex((prevIndex) => prevIndex >= headerData.length - 1 ? 0 : prevIndex + 1)
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [showIndex])


  return (
    <div className='relative w-full h-full'>
      <header className='relative w-full min-h-[100vh]' >
        {headerData.map((item, index) => (
          <div key={item.id} className={`absolute w-full h-[100vh] overflow-hidden ${showIndex !== index ? 'hidden' : 'block'} transition-all ease-in-out duration-300`}>
            <img src={item.img} className='absolute w-full h-full' />
            <div className='absolute w-full h-full bg-[#00000067] flex items-center' style={{ zIndex: 9 }}>
              <div className='absolute max-w-[500px] w-full  left-9 leading-tightdiv'>
                <h1 className='uppercase text-white'>{item.title}</h1>
                <p className='text-white'>{item.desc}</p>
                <div className='flex gap-5'>
                  <Link to='#'>
                    <button className='bg-red-900 text-white py-3 px-5 rounded-md mt-5 hover:scale-110 transition-all duration-300 ease-linear'>About us</button>
                  </Link>
                  <Link to='#'>
                    <button className='bg-red-900 text-white py-3 px-5 rounded-md mt-5 hover:scale-110 transition-all duration-300 ease-linear'>Visit Projects</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className='relative w-full h-full flex justify-end items-end' style={{ zIndex: '99 !important' }}>
          <div className=' h-[10vh] mr-5 md:h-[20vh] xl:h-[40vh] flex gap-2 translate-y-[80vh] md:translate-y-[77vh] xl:translate-y-[57vh]'>
            {headerData.map((item, i) => (
              <div key={item.id} className={`max-w-[100px] md:max-w-[300px] flex-1 rounded-md overflow-hidden transition-all ease-in-out ${showIndex === i ? '-mt-5' : ''}`}>
                <img src={item.img} />
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Small INTRO */}
      <section className='w-full min-h-[100vh] h-full ] bg-red-900 grid place-items-center'>
        <div className='w-full md:w-[80%] py-2 px-4 mt-[30px]'>
          <h1 className='fade-up leading-[1em] font-bold text-5xl'>Providing Nationwide Services in all over NEPAL.</h1>
          <p className='fade-up mt-5 text-[19px]'>VEC is a constantly growing business cooperating with leading engineers, designers and contractors, with vast expertise in BIM, virtual design, and construction technologies. Since the foundation, we have delivered over 325+ nationwide projects. And with about 200 BIM virtual construction experts, our company is among the United States’ most experienced BIM and VDC vendors. That allows us to assist customers in designing, building, and managing projects more effectively, leverage BIM advantages, and ensure the proper project lifecycle.</p>
          <div className='grid place-items-center gap-5 grid-cols-2 md:grid-cols-3'>
            <div className='fade-up w-full h-full p-2 mt-9 grid place-items-center'>
              <h1 className='font-bold'>50+</h1>
              <small className='text-[16px]'>Employes in over 4 office.</small>
            </div>
            <div className='fade-up w-full h-full p-2 mt-9 grid place-items-center'>
              <h1 className='font-bold'>10+</h1>
              <small className='text-[16px]'>Projects Completed.</small>
            </div>
            <div className='fade-up w-full h-full p-2 mt-9 grid place-items-center'>
              <h1 className='font-bold'>20+</h1>
              <small className='text-[16px]'>Years of Experience.</small>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className='w-full min-h-[100vh] flex justify-center items-center'>
        <div className='md:w-[90%]'>
          <div className='w-full h-full p-2 grid place-items-center'>
            <div className='text-stroke w-full flex gap-5 mt-9' style={{ '--stroke-color': 'red' }}>
              <h2 className='hover:text-red-800 hover:border-none'>FEATURED</h2>
              <h2 className='hover:text-red-800'>PROJECT</h2>
            </div>
            <p className='text-[20px] font-[400]'>VEC’s team of BIM virtual construction experts has completed dozens of notable projects across the country. From pharma life sciences and healthcare to education, aviation, and commercial real estate, we are a top vendor for companies from different industries.</p>
          </div>
          <div className='relative w-full h-full p-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center gap-5 mt-5'>
            {projectCardData.map((project, index) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className='grid place-items-center mt-9'>
            <Link to='#'><button className='border-none text-white py-3 px-5 bg-red-800 rounded-md hover:scale-110 transition-all duration-300 ease-in'>see more projects</button></Link>
          </div>
        </div>
      </section>

      {/* MOVING TEXT */}
      <section className='relative w-full h-[30vh] md:h-[50vh] mt-9'>
        <div className='slider relative w-full h-[15vh] md:h-[25vh] flex items-center justify-center' reverse='true' style={{ '--width': '70vw', '--height': '30vh', '--quantity': '2' }}>
          <div className='text-slide flex items-center justify-center ' style={{ '--position': '1' }}>
            <div className=' h-full   text-justify flex justify-center'>
              <h1>pre-construction 12</h1>
              <span className='w-[20px] h-[20px] border border-black' />
            </div>
            <div className=' h-full   text-justify flex justify-center'>
              <h1>general planning</h1>
              <span className='w-[20px] h-[20px] border border-black' />
            </div>
            <div className=' h-full   text-justify flex justify-center'>
              <h1>cost cutting</h1>
              <span className='w-[20px] h-[20px] border border-black' />
            </div>
          </div>
          <div className='text-slide h-[20vh] flex justify-center items-center' style={{ '--position': '2' }}>
            <div className=' h-full   text-justify flex justify-center'>
              <h1>pre-construction v1</h1>
              <span className='w-[20px] h-[20px] border border-black' />
            </div>
            <div className=' h-full   text-justify flex justify-center'>
              <h1>general planning</h1>
              <span className='w-[20px] h-[20px] border border-black' />
            </div>
            <div className=' h-full   text-justify flex justify-center'>
              <h1>cost cutting</h1>
              <span className='w-[20px] h-[20px] border border-black' />
            </div>
          </div>

        </div>
        <div className='slider relative w-full h-[15vh] md:h-[25vh] grid grid-cols-1' style={{ '--width': '70vw', '--height': '30vh', '--quantity': '2' }}>
          <div className='text-slide h-[20vh] flex items-center justify-center ' style={{ '--position': '1' }}>
            <div className='item h-full   text-justify flex justify-center'>
              <h1>construction management</h1>
              <span className='w-[20px] h-[20px] border border-black' />
            </div>
            <div className='item h-full   text-justify flex justify-center'>
              <h1>design-build</h1>
              <span className='w-[20px] h-[20px] border border-black' />
            </div>
            <div className='item h-full   text-justify flex justify-center'>
              <h1>self perform</h1>
              <span className='w-[20px] h-[20px] border border-black' />
            </div>
          </div>
          <div className='text-slide h-[20vh] flex justify-center items-center' style={{  '--position': '2' }}>
            <div className='item h-full   text-justify flex justify-center'>
              <h1>construction management</h1>
              <span className='w-[20px] h-[20px] border border-black' />
            </div>
            <div className='item h-full   text-justify flex justify-center'>
              <h1>design-build</h1>
              <span className='w-[20px] h-[20px] border border-black' />
            </div>
            <div className='item h-full text-justify flex '>
              <h1>self perform</h1>
              <span className='w-[20px] h-[20px] border border-black' />
            </div>
          </div>

        </div>
      </section>

 
    </div>
  )
}

const headerData = [
  {
    id: 1,
    img: 'https://mbluxury1.s3.amazonaws.com/2024/02/08084545/Eco-Residency-Background-Image-1.jpg',
    title: 'Eco Resdidency',
    desc: 'Mediaboom partnered with EcoResidency, pioneers in sustainable luxury living, to design a website that showcases their innovative projects in Whitefish, Montana.',
  },
  {
    id: 2,
    img: 'https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Eco Resdidency',
    desc: 'Mediaboom partnered with EcoResidency, pioneers in sustainable luxury living, to design a website that showcases their innovative projects in Whitefish, Montana.',
  },
  {
    id: 3,
    img: 'https://images.pexels.com/photos/176342/pexels-photo-176342.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Eco Resdidency',
    desc: 'Mediaboom partnered with EcoResidency, pioneers in sustainable luxury living, to design a website that showcases their innovative projects in Whitefish, Montana.',
  },
];

const projectCardData = [
  {
    id: 1,
    img: 'https://mbluxury1.s3.amazonaws.com/2024/02/08084545/Eco-Residency-Background-Image-1.jpg',
    hoverImg: 'https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Eco Resdidency',
    location: 'kathmandu',
    category: 'hydro power electricity'
  },
  {
    id: 2,
    img: 'https://mbluxury1.s3.amazonaws.com/2024/02/08084545/Eco-Residency-Background-Image-1.jpg',
    hoverImg: 'https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Eco Resdidency',
    location: 'kathmandu',
    category: 'hydro power electricity'
  },
  {
    id: 3,
    img: 'https://mbluxury1.s3.amazonaws.com/2024/02/08084545/Eco-Residency-Background-Image-1.jpg',
    hoverImg: 'https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Eco Resdidency',
    location: 'kathmandu',
    category: 'hydro power electricity'
  },
  {
    id: 4,
    img: 'https://mbluxury1.s3.amazonaws.com/2024/02/08084545/Eco-Residency-Background-Image-1.jpg',
    hoverImg: 'https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Eco Resdidency',
    location: 'kathmandu',
    category: 'hydro power electricity'
  },
];



export default Home
import React, { useEffect } from 'react'
import gsap from 'gsap'

const PreLoader = () => {

  useEffect(() => {
    const signature = document.querySelector('.signature')
    const content = signature.innerText
    const signatureWords = content.split('')
    signature.innerHTML = ''
    signatureWords.forEach((word, index) => {
      const signatureText = Object.assign(document.createElement('span'), {
        innerHTML: `<span>${word}</span>`
      })
      signature.appendChild(signatureText)
    })

    const tl = gsap.timeline()

    tl.fromTo('.preloader', {
      width: '00%',
      height: '00%',
    }, {
      width: '100%',
      height: '100vh',
      duration: 1,
    })
      .fromTo('.preload-text', {
        opacity: 0,
      }, {
        opacity: 1,
        duration: 1.5,
        delay: 0.5,
        ease: "power1.out",
      }).fromTo('.signature > span', {
        opacity: 0,
      }, {
        delay: 0.5,
        opacity: 1,
        stagger: 0.2
      })

  }, [])

  return (
    <div className='preloader  bg-[#D3C9BA] flex justify-center items-center'>
      <div className='w-full h-full bg-[#d0c2ac] rounded shadow-md shadow-[#d02ac] flex justify-center flex-col items-center py-2 px-4'>
        <div className='relative'>
          <h3 className='preload-text max-w-[700px] text-center text-[16px] leading-9'>For over 20 years, we've proudly served Nepal, contributing to the nation's infrastructure development with dedication and a commitment to making a lasting impact.</h3>
          <h2 className='signature absolute right-0 mt-5 text-5xl font-bold' style={{ fontFamily: "'Grey Qo', cursive", fontStyle: 'normal' }}>Aayumi</h2>
        </div>
      </div>
    </div>
  )
}

export default PreLoader
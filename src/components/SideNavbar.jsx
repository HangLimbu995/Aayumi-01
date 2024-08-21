import LinkItems from '../helpers/LinkItem'

const SideNavbar = ({ setNavMenu }) => {


    return (
        <div className=' sticky w-full h-full top-0 -mt-[20vh]' style={{ zIndex: 999 }} data-scroll data-scroll-sticky data-scroll-target='#main'>
            <div className='navSidebar absolute w-full min-h-[100vh] h-full top-0'>
                <div className='w-full h-[100vh] py-2 px-4 flex flex-col gap-4 bg-green-700'>
                    <div className='mt-2 w-full h-full '>
                        <ul className='side-ul flex flex-col gap-5 text-[16px] font-[400] text-white mt-[10vh]'>
                            {quickLink.map((item, index) => (
                                <LinkItems setNavMenu={setNavMenu} key={item + index} link={item[0]} item={item[1]} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

const quickLink = [
    ['/', 'Home'],
    ['/our-service', 'Our Service'],
    ['/about-us', 'About Us'],
    ['/contact-us', 'Contact Us'],
    ['/faq', 'FAQ'],
]

export default SideNavbar
import React from 'react'

const ProjectCard = ({project}) => {
    return (
        <div className='w-full h-full sticky top-5'>
            <div className='w-full p-2'>
                <div className='service-img relative w-full h-[50vh] rounded-xl' style={{ '--primary-img': `url(${project.img})`, '--hover-img': `url(${project.hoverImg})` }}>
                </div>
                <div className='flex flex-col gap-3 mt-3'>
                    <h3 className='font-bold tracking-tight text-[20px]'>{project.title}</h3>
                    <div className='flex justify-between text-[16px] font-bold px-2 capitalize'>
                        <small >{project.category}</small>
                        <small>{project.location}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
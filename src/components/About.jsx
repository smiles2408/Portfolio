import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gray-900 text-gray-300 '>
        <div className='flex flex-col justify-center text-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
               <p className='text-4xl font-bold inline border-b-4 border-orange-400'>About</p> 
            </div>
            <div>
            </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-2xl font-bold pl-4'>
                    <p>Hi I am Orchi, nice to meet you.Please take a look around.</p>
                </div>
                <div>
                    <p>Self-motivated Full Stack Developer with 4 years and 10 months of experience in software design, development and integration. Have a track of providing long term solutions to front -end problems. I am an enthusiastic Software Developer with a background in systems assessments, supporting client implementations and developing web applications.</p>
                </div>
            </div>
       
        </div>

    </div>
  )
}

export default About
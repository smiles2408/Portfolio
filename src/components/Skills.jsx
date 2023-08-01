import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import CSharp from '../assets/csharp.png';
import ReactLogo from '../assets/react.png';
import GitHub from '../assets/github.png';
import SQLLogo from '../assets/sql.jpeg';
import DotnetLogo from '../assets/dotnet.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-gray-900 text-gray-300'>
    {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div> 
                <p className='text-4xl inline border-b-4 border-orange-400'>Skills</p>
                <p className='py-4'>These are the technologies I have worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-100 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML Icon"></img>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-100 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS Icon"></img>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-100 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript Icon"></img>
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-100 duration-500'>
                    <img className='w-20 mx-auto' src={ReactLogo} alt="ReactLogo Icon"></img>
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-100 duration-500'>
                    <img className='w-20 mx-auto' src={CSharp} alt="CSharp Icon"></img>
                    <p className='my-4'>CSharp</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-100 duration-500'>
                    <img className='w-20 mx-auto' src={DotnetLogo} alt="DotnetLogo Icon"></img>
                    <p className='my-4'>Dotnet</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-100 duration-500'>
                    <img className='w-20 mx-auto' src={SQLLogo} alt="SQLLogo Icon"></img>
                    <p className='my-4'>SQL</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-100 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt="GitHub Icon"></img>
                    <p className='my-4'>GitHub</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
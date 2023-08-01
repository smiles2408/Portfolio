import React from 'react'
import DotnetProject from '../assets/VittosPizzeria.png'
import BlogSite from '../assets/BlogSite.png'
import TravelApp from '../assets/TravelApp.png'
import ToDoList from '../assets/ToDoList.png'
import PlanYourVacation from '../assets/PlanYourVacation.png'


const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-gray-900 text-gray-300 '>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-orange-400'>Work</p>
                <p className='py-6'>Check out some of my recent work</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4 py-4'>
                <div style={{backgroundImage: `url(${TravelApp})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
                {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-80'>
                        <span className='text-xl font-bold text-white tracking-wider'>
                            Website with HTML, CSS, Javascript and Weather API
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/smiles2408/travel-app'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div> 
                <div style={{backgroundImage: `url(${BlogSite})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
                {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-80'>
                        <span className='text-xl font-bold text-white tracking-wider'>
                        Responsive App with HTML, CSS, Javascript
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/smiles2408/Personal-Blog-Site'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div> 
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
                <div style={{backgroundImage: `url(${ToDoList})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
                {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-80'>
                        <span className='text-xl font-bold text-white tracking-wider'>
                            Blazor Project
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div> 
                <div style={{backgroundImage: `url(${DotnetProject})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
                {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-80'>
                        <span className='text-xl font-bold text-white tracking-wider'>
                            DotNet and C# Project
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/smiles2408/VitosPizzeria'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div> 
            </div>
           
            
        </div>
    </div>
  )
}

export default Work
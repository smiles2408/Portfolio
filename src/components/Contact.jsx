import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-gray-900 flex justify-center items-center p-4 '>
        <form method = "POST" action='https://getform.io/f/9c7ec6ad-ea1e-426b-ad30-95963358ddcf' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-orange-400 text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'>Submit the form below or shoot me an email at orchibhattacharya@gmail.com</p>
        </div>
        <input className='p-2 bg-[#ccd6f6]' type="text" placeholder='Name' name="name" />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name="email" />
        <textarea className='bg-[#ccd6f6] p-2' name="message" cols="30" rowa="30" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-orange-400 hover:border-orange-400 px-4 py-3 my-8 flex mx-auto items-center'>Lets Collaborate</button>
        </form>
    </div>
  )
}

export default Contact
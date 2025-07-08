import React from 'react'
import Navbar from './Navbar'

const App = () => {
  return (
    <>
    
    <Navbar></Navbar>

    <main className='bg-gray-100  flex sm:flex-row flex-col  p-5 items-center justify-center gap-20 h-[80vh] mx-20 mt-20'>

      <div className='max-w-120'>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-4 ">
        Salam , I'm Ayoub ! 👋 
      </h1>
      <p className="text-xl text-gray-700  max-w-2xl">
        i am software enginneitng student , i do fullstacj devollpent , i am kinda inrteets ed more towdard backedn stuff ( dsitrbted sysems , high perfonace , netweoks ) , also i engoy 
        low level programming , i love tinkering with computers and tech from linux and scrptting to llms and thier applications
      </p>

      <p className='text-2xl font-semibold mt-10'>
        Here are some pojects i have worked on 
      </p>
      <ul>
        <li>KAfak </li>
        <li>KAfak </li>
        <li>KAfak </li>
        <li>KAfak </li>
        <li>KAfak </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      </div>

      <div className='size-40 bg-amber-200'>

        <center className='text-gray-600 text-sm'>
          image
        </center>
        {/* this will be place holder for an image */}
      </div>

      
      
    
      
      


    </main>
    
    
    
    </>
  )
}

export default App
import React from 'react'
interface Props {

    children?: React.ReactNode;
}
const HeroSection  = ({children}:Props) => {
  return (
    <>
    <main className='  flex sm:flex-row flex-col  p-5 items-center justify-center gap-20 h-[80vh] '>
    
          <div className='max-w-120'>
          
          <h1 className="text-4xl font-bold pb-15 ">
            Salam , I'm Ayoub ! 👋 
          </h1>
          <p className="text-xl   max-w-2xl">
            I am a software engineering student. I do fullstack development and I am kind of interested more toward backend stuff (distributed systems, high performance, networks). I also enjoy 
            low-level programming. I love tinkering with computers and tech, from Linux and scripting to LLMs and their applications.
          </p>
    
          
    
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

export default HeroSection
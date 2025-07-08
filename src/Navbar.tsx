import React from 'react'

const Navbar = () => {
  return (
    <>
    <center>


    <header className='bg-white pt-5 w-[60vw]  text-xl font-mono'>
        <div className='flex flex-row justify-between'>
            <div>Ayoub</div>
            <div className='flex flex-row gap-4 justify-between'>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
            </div>
        </div>
    </header>
    
    </center>
    </>
  )
}

export default Navbar
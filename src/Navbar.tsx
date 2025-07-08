import React from "react";

const Navbar = () => {
  return (
    <>
      {/* <center> */}

      <header className=" pt-5   text-xl font-mono mx-5 sticky top-0 backdrop-blur-3xl">
        <div className="flex flex-row  justify-between">
          <div className="text-3xl font-serif ml-5 underline">Ayoub</div>
          <div className="flex flex-row gap-4 justify-between">
            <a className='hover:underline ' href="#">About</a>
            <a className='hover:underline ' href="#">Projects</a>
            <a className='hover:underline ' href="#">Blog</a>
            <a className='hover:underline ' href="#">Contact</a>
          </div>
        </div>
      </header>

      {/* </center> */}
    </>
  );
};

export default Navbar;

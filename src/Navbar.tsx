// import React, { useEffect, useState } from "react";

// import { DarkModeSwitch } from "react-toggle-dark-mode";
// import UnderlineToBackground from "./fancy/components/text/underline-to-background";
// import { toast } from "sonner";
// const Navbar = () => {
//   const [dark, setDark] = useState<boolean>(true);
//   useEffect(() => {
//     const html = document.documentElement;
//     if (dark) {
//       html.classList.add("dark");
//     } else {
//       html.classList.remove("dark");
//     }
//   }, [dark]);
//   return (
//     <>
//       {/* <center> */}

//       <header className=" pt-5   text-lg font-mono mx-5 sticky top-0 z-10 ">
//         <div className="flex flex-row  justify-between">
//           <div className="text-2xl font-serif ml-5 underline">
//             <UnderlineToBackground targetTextColor="black">
//               Ayouub
//             </UnderlineToBackground>
//           </div>
          
         

//           <div className="flex flex-row gap-4 justify-between">
//             <a className="hover:underline " href="#">
//               About
//             </a>
//             <a className="hover:underline " href="#projects">
//               Projects
//             </a>
//             <a className="hover:underline " href="#">
//               Blog
//             </a>
//             <a className="hover:underline " href="#">
//               Contact
//             </a>

//             <DarkModeSwitch
//               style={{ marginBottom: "" }}
//               checked={dark}
//               onChange={() => {
//                 setDark(!dark);
//               }}
//               size={20}
//             />
//           </div>
//         </div>
//       </header>

//       {/* </center> */}
//     </>
//   );
// };

// export default Navbar;


import React, { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import UnderlineToBackground from "./fancy/components/text/underline-to-background";
import { toast } from "sonner";

const Navbar = () => {
  const [dark, setDark] = useState<boolean>(true);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [dark]);

  return (
    <header className="pt-5 text-lg font-mono mx-5 sticky top-0 z-10 ">
      <div className="flex flex-row justify-between items-center">
        {/* Branding */}
        <div className="text-2xl font-serif ml-5 underline">
          <UnderlineToBackground targetTextColor="black">
            Ayouub
          </UnderlineToBackground>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-row gap-4 items-center">
          <a className="hover:underline" href="#">About</a>
          <a className="hover:underline" href="#projects">Projects</a>
          {/* <a className="hover:underline" href="#">Blog</a> */}
          <a className="hover:underline" href="#contact">Contact</a>
        </nav>

        {/* Theme Switch */}
        <div className="flex items-center">
          <DarkModeSwitch
            checked={dark}
            onChange={() => setDark(!dark)}
            size={20}
          />
          {/* Hamburger for mobile */}
          <button
            className="ml-4 md:hidden p-2 rounded focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {/* Simple hamburger icon */}
            <span className="block w-6 h-0.5 bg-black dark:bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-black dark:bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
          </button>
        </div>
      </div>
    
      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-4 mt-2 bg-white dark:bg-gray-900 p-4 rounded shadow rounded-2xl">
          <a className="hover:underline" href="#" onClick={() => setMenuOpen(false)}>About</a>
          <a className="hover:underline" href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          {/* <a className="hover:underline" href="#" onClick={() => setMenuOpen(false)}>Blog</a> */}
          <a className="hover:underline" href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
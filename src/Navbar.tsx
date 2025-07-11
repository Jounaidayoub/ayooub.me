import React, { useEffect, useState } from "react";

import { DarkModeSwitch } from "react-toggle-dark-mode";
import UnderlineToBackground from "./fancy/components/text/underline-to-background";
import { toast } from "sonner";
const Navbar = () => {
  const [dark, setDark] = useState<boolean>(true);
  useEffect(() => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [dark]);
  return (
    <>
      {/* <center> */}

      <header className=" pt-5   text-lg font-mono mx-5 sticky top-0 z-10 ">
        <div className="flex flex-row  justify-between">
          <div className="text-2xl font-serif ml-5 underline">
            <UnderlineToBackground targetTextColor="black">
              Ayouub
            </UnderlineToBackground>
          </div>
          
         

          <div className="flex flex-row gap-4 justify-between">
            <a className="hover:underline " href="#">
              About
            </a>
            <a className="hover:underline " href="#projects">
              Projects
            </a>
            <a className="hover:underline " href="#">
              Blog
            </a>
            <a className="hover:underline " href="#">
              Contact
            </a>

            <DarkModeSwitch
              style={{ marginBottom: "" }}
              checked={dark}
              onChange={() => {
                setDark(!dark);
              }}
              size={20}
            />
          </div>
        </div>
      </header>

      {/* </center> */}
    </>
  );
};

export default Navbar;

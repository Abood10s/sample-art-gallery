import React, { useState } from "react";
import { CgMenuMotion, CgClose } from "react-icons/cg";
import { Logo, Navbar, Overlay } from "./style";

const Nav = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <Navbar>
        {isClicked ? (
          <CgClose
            onClick={() => setIsClicked(!isClicked)}
            className={`${isClicked ? "show" : "hidden"}`}
          />
        ) : (
          <CgMenuMotion
            className={`${"menu"}${isClicked ? "show" : "hidden"}`}
            onClick={() => setIsClicked(!isClicked)}
          />
        )}
        <Logo>Gallery</Logo>
      </Navbar>
      <Overlay />
    </>
  );
};

export default Nav;

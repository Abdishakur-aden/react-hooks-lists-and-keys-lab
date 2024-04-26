import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const xxx = links.map ((link, index) => <a key={index} href={`#${link}`}>{link}</a>)

  return <nav>{xxx}</nav>;
}

export default NavBar;

import { Fragment } from "react";
import MenuItem from "../MenuItem/MenuItem";

const NavbarContent = () => {
  return (
    <Fragment>
      <MenuItem>Home</MenuItem>
      <MenuItem to="/projects">Projects</MenuItem>
      <MenuItem to="/about" isLast>
        About Us
      </MenuItem>
    </Fragment>
  );
};

export default NavbarContent;

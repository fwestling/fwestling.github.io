import { Fragment } from "react";
import MenuItem from "../MenuItem/MenuItem";

const NavbarContent = () => {
  return (
    <Fragment>
      <MenuItem>Home</MenuItem>
      <MenuItem>Projects</MenuItem>
      <MenuItem isLast>About Us</MenuItem>
    </Fragment>
  );
};

export default NavbarContent;

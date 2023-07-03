import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import StyledNavbar from "../components/StyledNavbar"
const SharedLayout = () => {
  return (
  <>
    <StyledNavbar />

      <Outlet /> 
    {/* <h2>This is shared Layout</h2> */}
    {/* <footer>This is footer</footer> */}
  </>
  );
};
export default SharedLayout;

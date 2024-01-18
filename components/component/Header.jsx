import NavBar from "./Navbar";
import Top from "./Header/Top";

const Header = () => {

  return (
      <div>
        <Top/>
        <div className="relative  sm:-mt-10 sm:top-10 sm:z-10">
          <NavBar />
        </div>
      </div>
  );
};

export default Header;

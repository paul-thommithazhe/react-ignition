import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="fixed top-0 w-full z-50 flex justify-between bg-white shadow-md px-6  ">
      <div className="logo-container">
        <img className="w-24 bg-white" src={LOGO_URL} />
      </div>
      <div className="flex items-center px-4">
        <ul className="flex space-x-6 ">
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="">
            <Link to="/">Home </Link>
          </li>
          <li className="">
            <Link to="/about">About </Link>
          </li>
          <li className="">
            <Link to="/contact">Contact </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

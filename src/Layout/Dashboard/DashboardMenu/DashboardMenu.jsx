import { FaHome, } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { Link, useNavigate, } from "react-router-dom";
import { VscTasklist } from "react-icons/vsc";
import { MdTaskAlt } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const DashboardMenu = () => {
  const navigate = useNavigate()

  const { logout } = useContext(AuthContext)
  // logout functionality
  const handleLogout = () => {
    logout()
      .then(() => {
        navigate("/")
        return alert('Logout Successful!');
      })
      .catch((error) => {
        return alert(error.message);
      });
  };

  return (

    <div>

      <Link
        to={"/dashboard"}
        className="w-full my-2 py-3 px-5 text-dark-01 text-left text-lg font-medium bg-gray-100 hover:bg-gray-200 duration-500 flex items-center gap-3"
      >
        <FaHome className="text-2xl" />{" "}
        <span className="hidden md:block">Home</span>
      </Link>


      <Link
        to={"/dashboard/createTask"}
        className="w-full my-2 py-3 px-5 text-dark-01 text-left text-lg font-medium bg-gray-100 hover:bg-gray-200 duration-500 flex items-center gap-3"
      >
        <BiTask className="text-2xl" />{" "}
        <span className="hidden md:block">Create Task</span>
      </Link>


      <Link
        to={"/dashboard/allTask"}
        className="w-full my-2 py-3 px-5 text-dark-01 text-left text-lg font-medium bg-gray-100 hover:bg-gray-200 duration-500 flex items-center gap-3"
      >
        <VscTasklist className="text-2xl" />{" "}
        <span className="hidden md:block">All Task</span>
      </Link>

      <Link
        to={"/dashboard/manageTask"}
        className="w-full my-2 py-3 px-5 text-dark-01 text-left text-lg font-medium bg-gray-100 hover:bg-gray-200 duration-500 flex items-center gap-3"
      >
        <MdTaskAlt className="text-2xl" />{" "}
        <span className="hidden md:block">Manage Task</span>
      </Link>

      <div onClick={handleLogout}
        className="w-full my-2 py-3 px-5 text-dark-01 text-left text-lg font-medium bg-gray-100 hover:bg-gray-200 duration-500 flex items-center gap-3"
      >
        <MdTaskAlt className="text-2xl" />{" "}
        <span className="hidden md:block">Logout</span>
      </div>





    </div>


  );
};

export default DashboardMenu;
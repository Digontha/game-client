import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {

    const {user,logOut}=useContext(AuthContext)
    const signOut=()=>{
        logOut();
    }
    const navLinks = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "text-xl"
            }
        >
            Home
        </NavLink>

        <NavLink
            to="/messages"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "text-xl"
            }
        >
            Game
        </NavLink>

        <NavLink
            to="/messages"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "text-xl"
            }
        >
            About
        </NavLink>

    </>
    return (
        <>
            <nav className="bg-[#0A0A0A] text-white">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2">
                                {navLinks}
                            </ul>
                        </div>
                        <div className="flex">
                            <a className=" text-xl">Enfield</a>
                            <img className="w-10 h-10" src="https://ih1.redbubble.net/image.1828223984.3789/st,small,507x507-pad,600x600,f8f8f8.u1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-5">
                            {navLinks}
                        </ul>
                    </div>
                   {user?
                   <div className="navbar-end">
                    <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="" />
                    <button onClick={signOut}>Log Out</button>
                   </div>
                   :
                    <div className="navbar-end">

                       <Link to="/login"> <button className="text-xl w-32 h-12 bg-black text-white relative overflow-hidden group z-10"><span className="absolute bg-white rotate-12 -inset-8 group-hover:duration-300 duration-700 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span><span className="absolute bg-[#2E3D29] rotate-12 -inset-8 group-hover:duration-700 duration-500 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span><span className="absolute bg-[#2B501C] rotate-12 -inset-8 group-hover:duration-500 duration-300 scale-x-0 group-hover:scale-x-50 origin-left transform transition-transform"></span><span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-700 ease-out text-center z-10 text-white">Login</span>Explore</button></Link>

                    </div>}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
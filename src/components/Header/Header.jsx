import { Link } from "react-router-dom";
import linkdin from "./../../../public/SocialIcon/linkedin.png"
import github from "./../../../public/SocialIcon/github.png"

const Header = () => {

    const navOptions = <>
        <li><Link to="/" className="  text-white">Home</Link></li>
        <li><Link to="/techStack" className="  text-white">Development Stack</Link></li>
        <li><Link to="/projects" className="  text-white">Projects</Link></li>
        <li><Link to="/" className="  text-white">Contact Me</Link></li>
        <li><Link to="/" className="  text-white">About Me</Link></li>
    </>

    const linkOptions = <div className="flex space-x-5">
        <li><Link><img src={linkdin}/></Link></li>
        <li><Link><img src={github}/></Link></li>
    </div>

    return (
        <div className="navbar bg-slate-800 p-5">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    {
                        navOptions
                    }
                </ul>
                </div>
                <a className="btn btn-ghost text-xl">Md. Farid Hossen Rehad</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {
                    navOptions
                }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    linkOptions
                }
            </div>
        </div>
    );
};

export default Header;
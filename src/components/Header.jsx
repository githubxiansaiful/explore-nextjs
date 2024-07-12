"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {

    const activeLink = usePathname();

    const navLinks = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About Us",
            path: "/about"
        },
        {
            title: "Services",
            path: "/services"
        },
        {
            title: "Portfolio",
            path: "/portfolio"
        },
        {
            title: "Blogs",
            path: "/blogs"
        },
        {
            title: "Contact Us",
            path: "/contact"
        }
    ]

    return (
        <div className="bg-[#f1f1f1]">
            <div className="container">
                <div className="navbar">
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
                                navLinks?.map((link) => 

                                <li key={link.path}>
                                    <Link className={`${activeLink === link.path && "text-red-500"}`} key={link.path} href={link.path}>{link.title}</Link>
                                </li>)
                            }
                            </ul>
                        </div>
                        <Link href="/" className="text-xl">NextJs</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                navLinks?.map((link) => 

                                <li key={link.path}>
                                    <Link className={`${activeLink === link.path && "text-red-500"}`} key={link.path} href={link.path}>{link.title}</Link>
                                </li>)
                            }
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn">Login</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
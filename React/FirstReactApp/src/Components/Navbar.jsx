import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <nav className="w-full bg-emerald-600 flex justify-between px-4 py-2 text-white">
                <h1 className="text-3xl">Logo</h1>
                <ul className="navbar flex gap-5 text-xl items-center">
                    {/* <li className="mx-8 underline">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="mx-8 underline">
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li className="mx-8 underline">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="mx-8 underline">
                        <Link to="/contact">Contact</Link>
                    </li> */}
                    <li className="mx-8 underline cursor-[pointer]">
                        <a href="/">
                            Home
                        </a>
                    </li>
                    <li className="mx-8 underline cursor-[pointer]">
                        <a href="/blog">
                            Blog
                        </a>
                    </li>
                    <li className="mx-8 underline cursor-[pointer]">
                        <a href="/about">
                            About
                        </a>
                    </li>
                    <li className="mx-8 underline cursor-[pointer]">
                        <a href="/contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
import {Link} from 'react-router-dom'
import Cart from './Pages/Cart'
import Home from './Pages/Home'

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full bg-[rgba(10,10,10,0.8)] z-40 backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-white text-xl font-bold">
                        Redux
                    </a>
                    
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/">Home</Link>
                        <Link to="/cart">Cart</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

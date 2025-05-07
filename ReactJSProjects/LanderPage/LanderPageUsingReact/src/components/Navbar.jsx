const Navbar = () => {
  return (
    <div className="navbar absolute w-full h-20 flex justify-between items-center text-white px-24 py-4 text-lg font-medium">
        <div className="logo navbar-logo text-3xl hover:cursor-pointer">
          Bentley
        </div>
        <ul className="navbar-menu flex gap-20 items-center">
          <li className="nav-items hover:text-xl transition-all hover:cursor-pointer">Home</li>
          <li className="nav-items hover:text-xl transition-all hover:cursor-pointer">Cars</li>
          <li className="nav-items hover:text-xl transition-all hover:cursor-pointer">About</li>
          <li className="nav-items hover:text-xl transition-all hover:cursor-pointer">Contact</li>
        </ul>
    </div>
  )
}

export default Navbar

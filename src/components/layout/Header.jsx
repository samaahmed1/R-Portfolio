function Header() {
  return (
    <header className="bg-[#212529] py-5 sticky top-0 z-10">
      <div className="container px-5 flex justify-between items-centar mx-auto text-white">
        <div className="logo">
          <a href="index.html" className="font-bold text-2xl">
            R
          </a>
        </div>
        <nav>
          <div className="iconblock md:hidden text-2xl cursor-pointer">
            <i class="fa-solid fa-bars"></i>
          </div>
          <ul className="hidden md:flex gap-4">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;

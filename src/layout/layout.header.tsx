const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <h1 className="text-xl font-bold">Phuc Dev</h1>

        {/* Menu */}
        <nav className="space-x-6 hidden md:block">
          <a href="#home" className="hover:text-blue-400 transition">Home</a>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </nav>

      </div>
    </header>
  );
};

export default Header;
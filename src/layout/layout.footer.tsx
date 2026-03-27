const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col md:flex-row justify-between items-center text-sm">
        {/* Left info */}
        <div className="mb-2 md:mb-0 text-center md:text-left">
          <h2 className="text-white font-semibold">Phuc Dev</h2>
          <p>Frontend Developer | React & UI</p>
        </div>

        {/* Right contact */}
        <div className="text-center md:text-right text-xs">
          <p>Email: yourmail@gmail.com</p>
          <p>GitHub: github.com/LeHoangPhuc11</p>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-700 text-center py-2 text-xs">
        © {new Date().getFullYear()} Phuc Dev. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
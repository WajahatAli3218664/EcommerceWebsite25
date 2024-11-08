import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 py-14 px-16 font-sans tracking-wide relative">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
        <ul className="space-y-4">
          <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-all">Newsroom</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-all">Tailwind CSS</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-all">Careers</a></li>
        </ul>
      </div>
      <div>
        <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
        <ul className="space-y-4">
          <li><a href="https://github.com/WajahatAli3218664" className="text-gray-300 hover:text-white text-sm transition-all">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/wajahat-ali-3189862b4/" className="text-gray-300 hover:text-white text-sm transition-all">LinkedIn</a></li>
          <li><a href="https://www.facebook.com/Wajii10/" className="text-gray-300 hover:text-white text-sm transition-all">Facebook</a></li>
        </ul>
      </div>
      <div>
        <h2 className="text-white text-lg font-semibold mb-4">Company</h2>
        <ul className="space-y-4">
          <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-all">About</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-all">Privacy Policy</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-all">Terms & Conditions</a></li>
        </ul>
      </div>
      <div className="flex items-center lg:justify-center">
       

      </div>
    </div>

    <hr className="my-8 border-gray-600" />

    <div className="flex sm:justify-between flex-wrap gap-6">
      <div className="flex space-x-5">
        {/* Social Media Icons */}
      </div>
      <p className="text-gray-300 text-sm">Copyright ©️ Wajahat Ali. 2024 All Rights Reserve.</p>
    </div>
  </footer>
);

export default Footer;
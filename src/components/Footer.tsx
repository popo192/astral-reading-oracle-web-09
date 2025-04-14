
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-6 px-4 border-t border-mystical-purple/20 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-white/60 mb-2 md:mb-0">
          © {new Date().getFullYear()} Mystic Tarot. All rights reserved.
        </p>
        <div className="flex items-center text-sm text-white/60">
          <span>Made with</span>
          <Heart className="h-4 w-4 mx-1 text-mystical-purple-light" />
          <span>and mystical energies</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

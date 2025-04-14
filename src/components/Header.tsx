
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Moon, Sun } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-10 bg-mystical-dark/80 backdrop-blur-lg border-b border-mystical-purple/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Moon className="h-6 w-6 text-mystical-gold mr-2" />
          <span className="font-serif text-xl font-bold bg-gradient-to-r from-white to-mystical-purple-light bg-clip-text text-transparent">
            Mystic Tarot
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm text-white/80 hover:text-white transition-colors">
            Home
          </Link>
          <Link to="/blog" className="text-sm text-white/80 hover:text-white transition-colors">
            Blog
          </Link>
          <Link to="/terms" className="text-sm text-white/80 hover:text-white transition-colors">
            Terms & Conditions
          </Link>
        </nav>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-white/80 hover:text-white">
            <Sun className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden text-white/80 hover:text-white">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

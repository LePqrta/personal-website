import React from 'react';

export default function Footer() {
  return (
    <footer className="py-6 border-t border-white/10 text-center text-text-muted text-sm backdrop-blur-sm bg-dark/50">
      <div className="max-w-7xl mx-auto px-6">
        <p>&copy; {new Date().getFullYear()} Onat Kaan Atılgan. Built with React, Tailwind & Framer Motion.</p>
      </div>
    </footer>
  );
}

'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';


export default function Navigation() {


  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/shop', label: 'Shop' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/*logo*/}
          <Link href="/" className="flex items-center space-x-2">
            <div>logo</div>
            <span>Beacon Street Gardens LLC</span>
          </Link>

          {/*nav links*/}
          <div className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}

            {/*cart icon*/}
            <Link href="/cart" className="relative">
              <ShoppingCart size={24} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
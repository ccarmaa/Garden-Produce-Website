'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCart } from 'lucide-react'; //shopping cart icon
import Image from 'next/image';


export default function Navigation() {

    const pathname = usePathname(); // gets curr page

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/shop', label: 'Shop' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-[var(--header)] border-b border-gray-200 shadow-sm h-[60px]">
            <div className="mx-auto px-8 py-4 h-full flex items-center">
                <div className="flex items-center justify-between w-full">
                {/*logo*/}
                <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                        <Image src="/logo-new.png" alt="Logo" width={60} height={60}/>
                        <span className="text-2xl font-medium text-[var(--text)]">
                            Beacon Street Gardens <span className="text-sm font-normal">LLC</span>
                        </span>
                    </Link>

                {/*nav links*/}
                <div className="flex items-center gap-8">
                    {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className={`relative text-base font-medium transition-colors ${pathname === link.href ? 'text-[var(--rust)] ' : 'text-[var(--text)] hover:text-[var(--rust)]'}`}>
                        {link.label}
                        {pathname === link.href && (
                            <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-[var(--rust)] animate-[slideIn_0.3s_ease-in-out]" />
                        )}
                    </Link>
                    ))}

                    {/*cart icon*/}
                    <Link href="/cart" className=" relative text-[var(--text)] hover:text-[var(--rust)] transition-colors">
                        <ShoppingCart size={22} />
                    </Link>
                </div>

            </div>
        </div>
    </nav>
  );
}
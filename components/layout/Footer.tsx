import Link from 'next/link';
import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-auto bg-[var(--footer)] border-t border-gray-300">
        <div className="mx-auto px-8 py-5">
            <div className="flex items-center justify-between">
            {/*left*/}
            <div className="text-[var(--text)] font-medium">
                Beacon Street Gardens <span className="text-xs font-normal">LLC</span>
            </div>

            {/*right*/}
            <div className="flex items-center gap-4 text-[var(--text)]">
                <Link href="/contact" className="hover:text-[var(--rust)] transition-colors ">
                    Contact
                </Link>
                <span className="text-gray-400">|</span>
                <a 
                    href="https://www.instagram.com/crfrencho/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-[var(--rust)] transition-colors flex items-center gap-3">
                    <span>Follow Us</span>
                    <Instagram size={20}/>
                </a>
            </div>
            </div>
        </div>
    </footer>
  );
}
import Link from 'next/link';
import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div>
            Beacon Street Gardens LLC
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/contact">
              Contact
            </Link>
            <span>|</span>
            <div className="flex items-center space-x-2">
              <span>Follow Us</span>
                <Instagram size={20} />

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
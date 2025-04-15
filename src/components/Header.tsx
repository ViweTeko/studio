"use client";

import Link from 'next/link';
import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <header className="bg-header-color text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-semibold">
          TrackStar Central
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/athletes" className="hover:text-gray-200">
                Athletes
              </Link>
            </li>
            <li>
              <Link href="/races" className="hover:text-gray-200">
                Races
              </Link>
            </li>
            <li>
              <Link href="/leaderboard" className="hover:text-gray-200">
                Leaderboard
              </Link>
            </li>
            <li>
              <Link href="/ai" className="hover:text-gray-200">
                AI Analysis
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;


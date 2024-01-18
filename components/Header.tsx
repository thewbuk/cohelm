import Link from 'next/link';
import { Button } from './ui/button';
import { Play, Users, Github } from 'lucide-react';
import { DarkModeToggle } from './DarkModeToggle';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 mb-4">
      <nav className="flex items-center justify-between  p-5 mx-auto bg-white dark:bg-slate-800 sm:flex-row ">
        <div className="flex items-center justify-end flex-1 space-x-4">
          {/* Other items */}
        </div>
        <div className="flex space-x-4">
          <Link
            href="/"
            className="text-gray-900 dark:text-gray-100 hover:text-blue-600"
          >
            <Button variant={'default'} className="rounded-lg">
              Single
            </Button>
          </Link>
          <Link
            href="/"
            className="text-gray-900 dark:text-gray-100 hover:text-blue-600"
          >
            <Button variant={'default'} className="rounded-lg">
              Bulk
            </Button>
          </Link>
        </div>
        <div className="flex items-end justify-end flex-1 space-x-4">
          <div className="border border-1 border-blue-400/50 hover:bg-blue-600/20 rounded-lg">
            <Button variant={'ghost'} className="rounded-lg">
              <Link href="https://github.com/thewbuk/cohelm" prefetch={false}>
                <Github className="w-6 h-6 text-black dark:text-white " />
              </Link>
            </Button>
          </div>
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;

import Link from 'next/link';
import { Button } from './ui/button';
import { Play, Users, Github } from 'lucide-react';
import { DarkModeToggle } from './DarkModeToggle';

const Header = () => {
  return (
    <header className="sticky top-0 z-50">
      <nav className="flex  items-center h-24 p-5 mx-auto bg-trasparent sm:flex-row ">
        <Link href="/">Single</Link>
        <Link href="/">Bulk</Link>
        <div className="flex items-center justify-end flex-1 space-x-4">
          <>
            <div className="border border-1 border-blue-400/50 hover:bg-blue-600/20  rounded-lg">
              <Button variant={'ghost'} className="rounded-lg">
                <Link href="/synthia/resources" prefetch={false}>
                  <Github className="w-6 h-6 text-black dark:text-white " />
                </Link>
              </Button>
            </div>
          </>
        </div>
        <DarkModeToggle />
      </nav>
    </header>
  );
};

export default Header;

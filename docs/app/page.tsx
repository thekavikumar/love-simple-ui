import Install from '@/components/Install';
import { buttonVariants } from '@/components/ui/button';
import {
  MoveUpRightIcon,
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {

  return (
    <div className="flex sm:min-h-[85.5vh] min-h-[85vh] flex-col items-center justify-center text-center px-2 sm:py-8 py-12">
      <Link
        href="https://github.com/thekavikumar/love-simple-ui"
        target="_blank"
        className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4 sm:-mt-12"
      >
        Explore on GitHub <MoveUpRightIcon className="w-4 h-4 font-extrabold" />
      </Link>
      <h1 className="text-3xl font-bold mb-4 sm:text-6xl">
        Build beautiful interfaces effortlessly with Love-Simple-UI.
      </h1>
      <p className="mb-8 sm:text-lg max-w-[800px] text-muted-foreground">
        Love-Simple-UI is a lightweight, open-source React component library
        designed to simplify your development process with 50+ customizable
        components.
      </p>
      <div className="flex flex-row items-center gap-5">
        <Link
          href="/docs/getting-started/introduction"
          className={buttonVariants({ className: 'px-6', size: 'lg' })}
        >
          Get Started
        </Link>
        <Link
          href="/docs/components"
          className={buttonVariants({
            variant: 'secondary',
            className: 'px-6',
            size: 'lg',
          })}
        >
          View Components
        </Link>
      </div>
     <Install/>
    </div>
  );
}

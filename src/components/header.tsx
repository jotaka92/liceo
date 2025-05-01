import React from 'react';
import Link from 'next/link';
import { GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';


export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <GraduationCap className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block text-lg">
            Liceo Creativo
          </span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium">
           <Link
            href="/"
            className={cn(buttonVariants({ variant: "ghost" }), "text-foreground/70 hover:text-foreground hover:bg-transparent px-2")}
          >
            Inicio
          </Link>
          <Link
             href="/#courses"
             className={cn(buttonVariants({ variant: "ghost" }), "text-foreground/70 hover:text-foreground hover:bg-transparent px-2")}
          >
            Cursos
          </Link>
          <Link
            href="/#contact"
            className={cn(buttonVariants({ variant: "ghost" }), "text-foreground/70 hover:text-foreground hover:bg-transparent px-2")}
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}

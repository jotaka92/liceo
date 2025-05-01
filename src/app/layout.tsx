import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Using Inter as a professional sans-serif font
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from "@/components/ui/toaster";


const inter = Inter({ subsets: ['latin'], variable: "--font-sans", });

export const metadata: Metadata = {
  title: 'Liceo Creativo - Tu Lugar para Aprender',
  description: 'Instituto Educativo Liceo Creativo',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={cn(
          "min-h-screen bg-secondary font-sans antialiased",
          inter.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
         <Toaster />
      </body>
    </html>
  );
}

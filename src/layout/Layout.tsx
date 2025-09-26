import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { Outlet } from 'react-router';
import { Footer } from '@/components/Footer';

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); 
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-gray-100 dark:bg-gray-900">
        <h1 className="text-4xl font-bold text-blue-500 animate-pulse">CityReport</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50">
        <Navbar user={undefined} />
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

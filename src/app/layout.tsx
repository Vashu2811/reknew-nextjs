"use client";

import { ThemeProvider } from "./components/Context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToBottomButton from "./components/ScrollBottom";
import ScrollToTopButton from "./components/ScrollTop";
import { Suspense} from 'react';
import "./globals.css";

const LoadingSpinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white">
    <div className="preloader">
      <img
        src="/assets/Priloader.png"
        alt="Loading..."
        className="animate-pulse"
      />
    </div>
  </div>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
        <Suspense fallback={<LoadingSpinner />}>
          <Navbar />
          <ScrollToBottomButton />
          {children}
          <Footer />
          <ScrollToTopButton />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}

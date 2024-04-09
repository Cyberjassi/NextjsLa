"use client"
import React, { ReactNode } from 'react';
import './page.css'; // Import your CSS file
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
    const router = useRouter();
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-content">
          
          <Link href="/about/aboutStudent">About Student</Link>
          <Link href="/about/aboutTeacher">About Teacher</Link>
        </div>
      </div>

      <div className="main">
        {/* Display the children */}
        {children}
      </div>
    </>
  );
}

export default Layout;

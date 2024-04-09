"use client"
import React, { ReactNode } from 'react';
import './page.css'; // Import your CSS file
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
    const router = useRouter();
    // it reutrn the current path
    const usepathname = usePathname();
    console.log(usepathname)
  return (
    <>
{
        usepathname!== '/login/collegeLogin'?
     ( <div className="sidebar">
        <div className="sidebar-content">
          <button onClick={()=>router.push('/login/collegeLogin')}>College Login</button>
          <Link href="/login/studentLogin">Student Login</Link>
          <Link href="/login/teacherLogin">Teacher Login</Link>
        </div>
 
      </div> ):(<h1>This is college</h1>)
}
      <div className="main">
       
        {children}
      </div>
    </>
  );
}

export default Layout;

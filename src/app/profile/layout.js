'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const Profilelayout = ({children}) => {
    const pathname = usePathname();

    const links = [
        { href: '/', label: 'Back to Home'},
        {href: '/profile/studentprofile', label: 'student profile'},
        {href: '/profile/teacherprofile', label: 'teacher profile'},
    ]
    return (
      <>
    <div className='flex gap-x-4'>
                {links
                    .filter(link => link.href !== pathname)
                    .map((link, i) => (
                        <Link key={i} href={link.href}>
                            {link.label}
                        </Link>
                ))}
            </div>
      <div className='font-bold text-3xl grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]' >
          {children}
            </div>
        </>
    )
}

export default Profilelayout;


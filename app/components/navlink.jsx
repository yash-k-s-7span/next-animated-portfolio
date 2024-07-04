"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ link }) => {
    const pathname = usePathname();
    console.log(pathname)
    return (
        <div>
            <Link className={`rounded p-1 ${pathname === link.url && "bg-black text-white"}`} href={link.url}>{link.title}</Link>
        </div>
    );
}

export default NavLink;

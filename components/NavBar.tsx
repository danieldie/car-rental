import Image from "next/image";
import React, { useEffect } from 'react';
import { UserButton } from '@clerk/nextjs';
import style from './style.module.scss'

function NavBar() {

    // useEffect(() => {
    //     document.getElementById('cl-userButtonPopoverFooter')
    // },[])

    return (
        <div className="flex items-center justify-between p-3 px-5 shadow-sm border-b-[1px]">
            <Image src='/logo.png' alt="logo" width={120} height={60} />
            <div className="customNavBar flex gap-5">
                <div className="hidden md:flex gap-5">
                    <h2 className="hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white">Home</h2>
                    <h2 className="hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white">History</h2>
                    <h2 className="hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white">Contact Us</h2>
                </div>
                <div className="flex-col justify-center">
                    <UserButton />
                </div>
            </div>
        </div>
    )
}

export default NavBar;
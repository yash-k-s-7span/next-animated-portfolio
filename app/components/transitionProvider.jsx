"use client"

import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { usePathname } from 'next/navigation';

const TransitionProvider = ({ children }) => {
    const pathname = usePathname();
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    useEffect(() => {
        setIsFirstLoad(true);
        const timer = setTimeout(() =>{
            setIsFirstLoad(false);
        },800)
        return () => clearTimeout(timer)
    }, [pathname])
    return (
        <AnimatePresence mode="wait">
            <div key={pathname} className="w-svh h-svh bg-gradient-to-b from-blue-300 to-red-100">
                {/* Initial div */}
                <motion.div className='h-screen w-screen fixed bg-black rounded-b-[100px] z-40'
                    animate={{ height: "0vh" }}
                    exit={{ height: "130vh" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                />

                {/* Div which show text in middle */}
                {isFirstLoad && (
                    <motion.div className='fixed m-auto top-0 bottom-0 left-0 right-0 text-white md:text-8xl text-5xl md:z-50 cursor-default w-fit h-fit'
                        animate={{ opacity: 0 }}
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >{pathname.substring(1)}</motion.div>
                )}


                {/* Middle div which effect the color */}
                <motion.div className='h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30'
                    animate={{ height: "0vh", transition: { delay: 0.5 } }}
                    initial={{ height: "130vh" }}
                />
                <div className="h-24">
                    <Navbar />
                </div>
                <div className="h-[calc(100vh-6rem)]">
                    {children}
                </div>
            </div>
        </AnimatePresence>
    );
}

export default TransitionProvider;

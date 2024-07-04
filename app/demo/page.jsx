"use client"
import React from 'react';
import { motion } from 'framer-motion'

const Demo = () => {
    const variants = {
        variants1: {
            x: 400,
            y: 300,
            opacity: 0.5,
            transition: { duration: 3 }
        },
        variants2: {
            x: 100,
            y: -300,
            rotation: 90
        }
    }
    return (
        <div className='h-full flex items-center justify-center'>
            <motion.div className='w-20 h-20 bg-red-500 rounded' initial={{ x: -100 }} variants={variants} animate="variants1" ></motion.div>
        </div>
    );
}

export default Demo;

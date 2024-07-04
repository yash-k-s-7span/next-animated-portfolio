"use client"
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const items = [
    {
        id: 1,
        color: "from-red-300 to-blue-300",
        title: "React Commerce",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
        img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        link: "https://appleinfinity.netlify.app/",
    },
    {
        id: 2,
        color: "from-blue-300 to-violet-300",
        title: "Next.js Medium Blog",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
        img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        link: "https://appleinfinity.netlify.app/",
    },
    {
        id: 3,
        color: "from-violet-300 to-purple-300",
        title: "Vanilla Book App",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
        img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        link: "https://appleinfinity.netlify.app/",
    },
    {
        id: 4,
        color: "from-purple-300 to-red-300",
        title: "Spotify Music App",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
        img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "https://appleinfinity.netlify.app/",
    },
];


const PortfolioPage = () => {
    const ref = useRef(null);
    useEffect(() => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [])

    const { scrollYProgress } = useScroll({ target: ref })
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"])
    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className='h-[600vh] relative' ref={ref}>
                <div className='h-[calc(100vh-6rem)] flex items-center justify-center md:text-8xl text-5xl text-center' ref={ref}>My Works</div>
                <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
                    <motion.div style={{ x }} className='flex'>
                        <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300 overflow-hidden' />
                        {items.map((item, index) => {
                            return (
                                <div key={item.id} className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}>
                                    <div className='flex flex-col gap-8 text-white'>
                                        <h1 className='text-xl font-bold md:text-4xl xl:text-5xl lg-text-4xl'>{item.title}</h1>
                                        <div className='relative w-80 h-56 md:w-96 lg:w-[300px] lg:h-[300px] xl:w-[600px] xl-h[420px]'>
                                            <Image src={item.img} alt='' fill />
                                        </div>
                                        <p className='w-80 md:w-96 lg:w-[500px] xl:w-[600px] lg:text-lg'>{item.desc}</p>
                                        <Link href={item.link} className='flex justify-end'>
                                            <button className='p-2 text-sm md:p-2 md:text-sm lg:p-2 lg:text-lg bg-white text-gray-600 font-semibold rounded-md '>See Demo</button>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </motion.div>
                </div>
            </div>
            <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
                <h1 className="md:mt-5 md:text-5xl text-xl">Do you have a project?</h1>
                <div className='relative'>
                    <motion.svg

                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                        viewBox="0 0 300 300"
                        className="w-64 h-64 md:w-96 md:h-96"
                    >
                        <defs>
                            <path
                                id="circlePath"
                                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                            />
                        </defs>
                        <text fill="#000">
                            <textPath xlinkHref="#circlePath" className="text-lg">
                                Front-end Developer and Game Developer
                            </textPath>
                        </text>

                    </motion.svg>
                    <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                        <Link href='/contact' className="w-16 h-16 md:w-24 md:h-24 bg-black text-white rounded-full flex items-center justify-center z-50">Hire Me</Link>
                    </div>
                </div>
            </div>

        </motion.div>
    );
}

export default PortfolioPage;


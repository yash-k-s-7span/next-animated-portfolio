// "use client"
// import React, { useRef } from 'react';
// import { motion, useInView, useScroll } from "framer-motion";
// import Brain from '../components/brain';

// const AboutPage = () => {
//   const skills = ["HTML", "CSS", "JavaScript", "Tailwindcss", "React.js", "Next.js", "SQL", "Java", "Python", "GSAP", "Frame motion"]
//   const containerRef = useRef();
//   const experienceRef = useRef();
//   const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
//   const { scrollYProgress } = useScroll({ container: containerRef });
//   const skillRef = useRef();
//   // const isSkillRefInView = useInView(skillRef, {once:true});
//   const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
//   return (
//     <motion.div
//       className='h-full'
//       initial={{ y: "-200vh" }}
//       animate={{ y: "0%" }}
//       transition={{ duration: 1 }}
//     >
//       {/* CONTAINER */}
//       <div className='h-full overflow-auto'>
//         {/* TEXT CONTAINER */}
//         <div className='p-4 sm:p-8 md:p-12 flex flex-col gap-24'>
//           {/* BIOGRAPHY CONTAINER */}
//           <div className='flex flex-col gap-12 justify-center'>
//             {/* BIOGRAPHY TITLE */}
//             <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
//             {/* BIOGRAPHY DESCRIPTION */}
//             <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ut non quas fugiat nihil culpa animi ea modi nesciunt blanditiis, eveniet reiciendis tempora eius eligendi architecto ipsum exercitationem ad saepe.</p>
//             {/* BIOGRAPHY QUOTE */}
//             <span className='italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
//             {/* BIOGRAPHY SIGNATURE SVG */}
//             <div className="self-end">
//               <svg width="75" height="130" viewBox="0 0 75 164" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M10 76C10 59.1078 10.7621 8.44283 11 25.3333C11.1404 35.3006 11.7115 45.3976 12.4444 55.3333C12.9145 61.7052 13.2183 69.8862 16 75.8889C17.4521 79.0225 31.1019 63.1026 31.8889 61.4444C37.2684 50.109 37.5935 37.2762 36.9444 24.9444C36.6213 18.8038 34.6118 17.0869 32.5 23C30.319 29.1067 30 34.2677 30 40.7778C30 56.0257 30.7464 71.2273 31 86.4444C31.2079 98.9189 31 111.413 31 123.889C31 128.756 33.6118 145.689 25.2222 146C19.5172 146.211 19.8012 143.723 19.2222 138.222C18.3565 129.998 18 121.895 18 113.611C18 109.753 17.7987 105.797 18.0556 101.944C18.3836 97.0242 23.7277 81.4349 28.5556 80.0556C31.6846 79.1615 35.6245 80.681 38.5 78.4444C40.6581 76.7659 42.3283 77 45 77" stroke="black" stroke-width="3" stroke-linecap="round" />
//                 <path d="M44 64C37.0571 64.7714 36.8332 76.7188 37 81.2222C37.0573 82.7683 37.909 83.3831 39.4444 82.9444C40.3158 82.6955 40.7662 77.9907 41 77.0556C42.033 72.9237 44 71.1721 44 66.6111C44 62.6296 44 74.5741 44 78.5556C44 88.5952 48.219 75.1793 48.7778 71.8889C49.5435 67.3797 50 53.6485 50 58.2222C50 62.3148 50 66.4074 50 70.5C50 79.7717 51 89.0933 51 98.5556C51 102.242 49.3282 103.9 46.2222 105.778C40.738 109.094 43.9883 101.407 45 98.5556C47.2353 92.256 51.1827 86.7798 53.1111 80.3333C55.558 72.1539 56.5807 63.1346 57.2222 54.6667C57.5333 50.5601 57.8233 46.4507 57.9444 42.3333C58.0104 40.0891 58 38.994 58 36.9444C58 36.2778 58 38.2778 58 38.9444C58 45.9444 58 52.9444 58 59.9444C58 72.6852 58 85.4259 58 98.1667C58 102.427 58.2265 89.5867 59.2222 85.4444C59.6733 83.5679 60.8493 76.2976 63 75.2222C63.8527 74.7959 67 94.9405 67 97" stroke="black" stroke-width="3" stroke-linecap="round" />
//               </svg>

//             </div>
//           </div>
//           {/* SKILLS CONTAINER */}
//           <div className='flex flex-col gap-10 justify-center p-3 md:px-5'>
//             {/* SCROLL SVG */}
//             <div className='pt-4'>
//               <motion.svg
//                 initial={{ opacity: 0.2, y: 0 }}
//                 animate={{ opacity: 1, y: "10px" }}
//                 transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 width={50}
//                 height={50}
//               >
//                 <path
//                   d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
//                   stroke="#000000"
//                   strokeWidth="1"
//                 ></path>
//                 <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
//                 <path
//                   d="M15 11L12 14L9 11"
//                   stroke="#000000"
//                   strokeWidth="1"
//                 ></path>
//               </motion.svg >
//             </div>
//             {/* SKILLS TITLE */}
//             <h1 className='font-bold text-2xl px-2'>SKILLS</h1>
//             {/* SKILLS LIST */}
//             <div className='flex gap-4 flex-wrap px-2'>
//               {skills.map((item, index) => {
//                 return (
//                   <div key={index}>
//                     <button className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>{item}</button>
//                   </div>
//                 )
//               })}
//             </div>

//           </div>
//           {/* EXPERIENCE CONTAINER */}
//           <div className='flex flex-col gap-10 justify-center p-3 md:px-5'>
//             {/* SCROLL SVG */}
//             <motion.svg
//               initial={{ opacity: 0.2, y: 0 }}
//               animate={{ opacity: 1, y: "10px" }}
//               transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               width={50}
//               height={50}
//             >
//               <path
//                 d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
//                 stroke="#000000"
//                 strokeWidth="1"
//               ></path>
//               <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
//               <path
//                 d="M15 11L12 14L9 11"
//                 stroke="#000000"
//                 strokeWidth="1"
//               ></path>
//             </motion.svg >
//             {/* EXPERIENCE CONTAINER */}
//             <div
//               className="flex flex-col gap-12 justify-center pb-48"
//               ref={experienceRef}
//             >
//               {/* EXPERIENCE TITLE */}
//               <motion.h1
//                 initial={{ x: "-300px" }}
//                 animate={isExperienceRefInView ? { x: "0" } : {}}
//                 transition={{ delay: 0.2 }}
//                 className="font-bold text-2xl"
//               >
//                 EXPERIENCE
//               </motion.h1>
//               {/* EXPERIENCE LIST */}
//               <motion.div
//                 initial={{ x: "-300px" }}
//                 animate={isExperienceRefInView ? { x: "0" } : {}}
//                 className=""
//               >
//                 {/* EXPERIENCE LIST ITEM */}
//                 <div className="flex justify-between h-48">
//                   {/* LEFT */}
//                   <div className="w-1/3 ">
//                     {/* JOB TITLE */}
//                     <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
//                       Senior JavaScript Engineer
//                     </div>
//                     {/* JOB DESC */}
//                     <div className="p-3 text-sm italic">
//                       I led web development, offering expertise in JavaScript
//                       frameworks.{" "}
//                     </div>
//                     {/* JOB DATE */}
//                     <div className="p-3 text-red-400 text-sm font-semibold">
//                       2024 - Present
//                     </div>
//                     {/* JOB COMPANY */}
//                     <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
//                       Apple
//                     </div>
//                   </div>
//                   {/* CENTER */}
//                   <div className="w-1/6 flex justify-center">
//                     {/* LINE */}
//                     <div className="w-1 h-full bg-gray-600 rounded relative">
//                       {/* LINE CIRCLE */}
//                       <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
//                     </div>
//                   </div>
//                   {/* RIGHT */}
//                   <div className="w-1/3 "></div>
//                 </div>
//                 {/* EXPERIENCE LIST ITEM */}
//                 <div className="flex justify-between h-48">
//                   {/* LEFT */}
//                   <div className="w-1/3 "></div>
//                   {/* CENTER */}
//                   <div className="w-1/6 flex justify-center">
//                     {/* LINE */}
//                     <div className="w-1 h-full bg-gray-600 rounded relative">
//                       {/* LINE CIRCLE */}
//                       <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
//                     </div>
//                   </div>
//                   {/* RIGHT */}
//                   <div className="w-1/3 ">
//                     {/* JOB TITLE */}
//                     <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
//                       Senior React Developer
//                     </div>
//                     {/* JOB DESC */}
//                     <div className="p-3 text-sm italic">
//                       I spearheaded React-based application development,
//                       leveraging advanced skills.{" "}
//                     </div>
//                     {/* JOB DATE */}
//                     <div className="p-3 text-red-400 text-sm font-semibold">
//                       2019 - 2024{" "}
//                     </div>
//                     {/* JOB COMPANY */}
//                     <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
//                       Microsoft
//                     </div>
//                   </div>
//                 </div>
//                 {/* EXPERIENCE LIST ITEM */}
//                 <div className="flex justify-between h-48">
//                   {/* LEFT */}
//                   <div className="w-1/3 ">
//                     {/* JOB TITLE */}
//                     <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
//                       Freelancer{" "}
//                     </div>
//                     {/* JOB DESC */}
//                     <div className="p-3 text-sm italic">
//                       I provided web solutions, applying a range of technologies
//                       to address client requirements.{" "}
//                     </div>
//                     {/* JOB DATE */}
//                     <div className="p-3 text-red-400 text-sm font-semibold">
//                       2010 - 2019{" "}
//                     </div>
//                   </div>
//                   {/* CENTER */}
//                   <div className="w-1/6 flex justify-center">
//                     {/* LINE */}
//                     <div className="w-1 h-full bg-gray-600 rounded relative">
//                       {/* LINE CIRCLE */}
//                       <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
//                     </div>
//                   </div>
//                   {/* RIGHT */}
//                   <div className="w-1/3 "></div>
//                 </div>
//               </motion.div>

//             </div>
//           </div>
//           {/* SVG CONTAINER */}
//           <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
//             <Brain scrollYProgress={scrollYProgress} />
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default AboutPage;



"use client";
import Brain from "../components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true}); To display the skill only one time
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
  // {once:true} to display the skill only one time 

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            {/* <Image
              src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            /> */}
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              harum quibusdam cupiditate nobis accusamus sed aut aperiam,
              reiciendis numquam! Voluptas voluptatibus obcaecati dolore itaque
              suscipit! Vel doloremque numquam quam nihil.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              <svg
                width="185"
                height="77"
                viewBox="0 0 370 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M66 2C66 29.4851 68.6687 64.5118 49.3333 87.4444C42.4997 95.5495 35.7683 97.6796 26.2222 101C20.002 103.164 8.87322 103.873 4 99C-0.260934 94.7391 2.94804 88.1756 8.22222 86.2222C13.7053 84.1915 17.942 84 23.7778 84C33.359 84 41.3193 83.5602 50.2222 87C56.6125 89.469 63.5773 91.9131 69.5555 95.5C75.4778 99.0533 87.1838 104.357 93.5 99.4444C96.1292 97.3995 96.2752 92.5118 96.9444 89.5C97.9646 84.9092 92.6432 83.2024 89 83C84.472 82.7484 82.3397 81.8856 82 88C81.8025 91.5554 83.5627 94.4193 86 97C88.9648 100.139 92.0717 100.96 96 98.7778C99.3106 96.9386 98 90.7299 98 87.5C98 85.0327 98.4365 83.1348 99.2222 80.7778C100.357 77.3743 99.2311 78.4486 101.5 77.9444C105.352 77.0886 108 76.4766 108 81.5C108 85.6646 109 89.3473 109 93.5C109 100.142 108.863 95.0454 110.5 91.4444C112.765 86.4616 116.631 81.205 121.5 78.5C127.057 75.4129 126 82.1509 126 85.5C126 92.5532 124.42 102 134 102C142.932 102 153 102.569 153 91.2222C153 87.1735 153.772 81.3206 148 81C141.934 80.663 142.107 81.8068 139.5 86.5C134.378 95.7204 137.972 105 149.5 105C153.589 105 153.996 99.8977 155.5 96.8889C157.902 92.0843 161 85.4067 161 80C161 74.0547 158.407 82.7413 157.222 84.2222C155.194 86.7574 155 92.5718 155 95.7778C155 99.9302 153.8 104.999 158 107.222C161.954 109.316 164.884 106.382 167.778 103.778C171.15 100.743 175.896 99.1107 180 97C186.143 93.8409 191.659 91.4099 198.222 89.2222C206.505 86.4614 214.839 87 223.5 87C230.613 87 231.628 104 222.5 104C216.954 104 199.251 107.814 207 95.2222C211.456 87.9805 214.484 80.6007 220 73.7778C229.781 61.6805 242.696 50.8197 256.222 43C264.769 38.0591 274.192 34.6264 283 30.2222C286.55 28.4473 280.07 32.3343 278.5 33.5556C271.707 38.8391 266.609 45.3914 260.556 51.4444C255.356 56.6444 250.682 61.459 246.5 67.5C242.917 72.6757 239.364 77.3825 236.556 83C233.829 88.4524 231.82 94.3142 228.556 99.4444C226.693 102.371 225.518 107.823 222.5 109.5C214.795 113.78 217.517 100.438 218.056 95.0556C218.678 88.8318 227.982 85.7572 233.056 88.6111C239.614 92.3003 245.506 97.7883 252 101.778C254.886 103.551 259.46 107 263 107C271.267 107 273.32 81.9392 268.778 77.2222C264.112 72.3774 261.206 80.5039 261 84C260.576 91.2135 257.836 96.9269 264.778 102C272.242 107.454 285.041 112.276 292.111 104.833C298.002 98.6323 304.301 90.8902 308.556 83.4444C310.355 80.295 310.132 84.6251 309.444 86C305.387 94.1158 303 102.264 303 111.5C303 116.021 337.534 99.1863 340.5 98C347.33 95.2679 355.47 93.8299 361.778 90C363.935 88.6902 365.473 88 368 88"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Nest.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Spring Boot
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                GraphQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Apollo
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Three.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                WebGL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Webpack
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Vite
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Docker
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                AWS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Firebase
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Figma
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior JavaScript Engineer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I led web development, offering expertise in JavaScript
                    frameworks.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Apple
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior React Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I spearheaded React-based application development,
                    leveraging advanced skills.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2019 - 2024{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Microsoft
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Freelancer{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I provided web solutions, applying a range of technologies
                    to address client requirements.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2010 - 2019{" "}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/2 top-14 sticky top-0 z-30">
          <Brain scrollYProgress={scrollYProgress} />
        </div>

      </div>
    </motion.div>
  );
};

export default AboutPage;
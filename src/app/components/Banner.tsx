"use client";

import Image from 'next/image';

import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "Welcome to My Blog",
      "We are Providing Luxuries Fregances",
      "And Huge Offers"
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 30,
    delaySpeed:2000,
  })
  return (
    <div>
    <div className=" bg-black text-bold z-[-1] w-full h-[500px] bg-banner bg-cover bg-no-repeat bg-center flex items-center justify-center text-white text-2xl">
    <div className='max-w-screen-2xl mx-auto flex flex-col justify-center tetx-center items-center text-4xl md:text-5xl font-extrabold'>
   {text}
    </div>
    </div>

</div>

  )
}

export default Banner;


import { Familjen_Grotesk } from 'next/font/google';
import React from 'react';

export const familjen = Familjen_Grotesk({
  subsets: ['latin'],
  weight: '400',
});

export default function ProjectHeader({
  children,
}: {
  children: string | React.ReactElement;
}) {
  return (
    <>
      <h1
        className={`${familjen.className} mt-12 ml-6 text-4xl text-center md:text-left md:text-5xl`}
      >
        {children}
      </h1>
      <hr className='my-6 mx-6 text-gray-400' />
    </>
  );
}

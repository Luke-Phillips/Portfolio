import Image from 'next/image';
import Link from 'next/link';

import { Familjen_Grotesk } from 'next/font/google';

export const familjen = Familjen_Grotesk({
  subsets: ['latin'],
  weight: '400',
});

export default function ProjectCard({
  icon,
  title,
  subtitle,
  description,
  link,
  linkText,
  gradient = false,
}: {
  icon: string;
  title: string;
  subtitle?: string;
  description: string;
  link: string;
  linkText?: string;
  gradient?: boolean;
}) {
  return (
    <Link
      href={link}
      className={`group w-80 h-128 md:w-96 md:h-152 rounded-xl flex flex-col justify-between ${
        gradient
          ? 'bg-gradient-to-t hover:bg-gradient-to-b from-phi-templater-dark-purple to-black'
          : 'border border-white hover:bg-white hover:text-black'
      }`}
    >
      <div className='flex flex-col justify-between items-center'>
        {icon ? (
          <Image
            src={icon}
            width={192}
            height={192}
            className='mt-8 mb-3.5'
            alt={`${title} project icon`}
          />
        ) : (
          <div className='h-60'></div>
        )}
        <h1
          className={`mx-6 mt-6 mb-1 text-3xl md:text-4xl ${familjen.className}`}
        >
          {title}
        </h1>
        {subtitle && (
          <div className='flex'>
            <div className='mt-4 w-6 h-px bg-gray-400'></div>
            <h2
              className={`${
                familjen.className
              } mx-2 text-lg md:text-xl text-gray-200   ${
                gradient ? '' : 'group-hover:text-gray-600'
              }
              }`}
            >
              {subtitle}
            </h2>
            <div className='mt-4 w-6 h-px bg-gray-400'></div>
          </div>
        )}
        <p
          className={`text-sm md:text-lg mx-6 mb-6 mt-6  self-start ${
            gradient ? '' : 'text-gray-400 group-hover:text-gray-500'
          }`}
        >
          {description}
        </p>
      </div>
      <p
        className={`ml-6 mb-6 mr-6 group-hover:text-xl ${
          gradient && 'text-lg'
        }`}
      >{`${linkText ?? 'Learn More'} ->`}</p>
    </Link>
  );
}

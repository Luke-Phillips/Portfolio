import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <hr className='mt-12 mx-6 text-gray-400' />
      <div className='w-full h-32 absolute bottom-0 flex justify-center gap-12'>
        <Link
          href='https://www.github.com/Luke-Phillips'
          target='_blank'
          className='flex'
        >
          <Image
            src='/icon/third-party/github-dark-round.png'
            width={48}
            height={48}
            className='object-contain'
            alt='Github icon'
          />
          <p className='pl-1 self-center'>/Luke-Phillips</p>
        </Link>
        <Link
          href='https://www.linkedin.com/in/luke-t-phillips/'
          target='_blank'
          className='flex'
        >
          <Image
            src='/icon/third-party/linkedin-dark-round.png'
            width={48}
            height={48}
            className='object-contain'
            alt='LinkedIn icon'
          />
          <p className='pl-1 self-center'>/luke-t-phillips</p>
        </Link>
        <div className='self-center'>
          <div className='flex my-1'>
            <div className='w-16 text-right text-gray-400'>email:</div>
            <div className='pl-2'>luke.thomas.phillips@gmail.com</div>
          </div>
          <div className='flex my-1'>
            <div className='w-16 text-right text-gray-400'>phone:</div>
            <div className='pl-2'>714.651.4039</div>
          </div>
        </div>
      </div>
    </>
  );
}

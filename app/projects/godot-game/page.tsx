import Image from 'next/image';
import Link from 'next/link';
import ProjectHeader from '@/app/ui/projectHeader';

export default function Page() {
  return (
    <div>
      <ProjectHeader>
        <div className='flex'>
          <Image
            src='/icon/project/godot-game-icon.png'
            width={128}
            height={128}
            alt=''
            className='px-3'
          />
          <div className='self-end'>Godot Puzzle Game</div>
        </div>
      </ProjectHeader>
      <div className='lg:m-12 flex flex-col items-center lg:flex-row-reverse lg:justify-between lg:gap-6'>
        <div className='w-5/6 lg:w-auto'>
          <h1 className='mb-3 text-2xl'>Check It Out</h1>
          <div className='flex items-end gap-12 mb-12'>
            <Link
              href='https://luke-phi.itch.io/game-jam-assembly'
              target='_blank'
              className=''
            >
              <div className='bg-white px-2 py-1 rounded-xl'>
                <Image
                  src='/icon/third-party/itchio.svg'
                  width={160}
                  height={160}
                  alt=''
                  className='min-w-24'
                />
              </div>
              <h2 className='text-center mt-2 text-lg'>{'Itch.io ->'}</h2>
            </Link>
            <Link
              href='https://github.com/Luke-Phillips/CoFiGameJamOct2022'
              target='_blank'
              className=''
            >
              <Image
                src='/icon/third-party/github-dark-round.png'
                width={160}
                height={160}
                alt=''
                className='min-w-24'
              />
              <h2 className='text-center mt-2 text-lg'>{'Github ->'}</h2>
            </Link>
          </div>
        </div>
        <div className='w-5/6 lg:w-1/2'>
          <h1 className='mb-3 text-2xl'>What is it?</h1>
          <p className='mb-12'>
            A puzzle game created with the Godot game engine.{' '}
          </p>
          <h1 className='mb-3 text-2xl'>{"Raison D'etre"}</h1>
          <p className='mb-12'>
            I created this game for a game jam we held at work. Because its
            intended audience were my coworkers, the puzzles are solved
            primarily using inside jokes. This makes it a lot less fun for
            everyone else to play, but give it a shot on itch.io anyway.
          </p>
          <h1 className='mb-3 text-2xl'>Credits</h1>
          <p className='mb-12'>
            <ul>
              <li>Landon Phillips - art</li>
              <li>Anya Phillips - art</li>
              <li>
                <Link
                  href='https://open.spotify.com/artist/6pLFzEdG0Ul84QMBJ0N8QZ'
                  target='_blank'
                  className='text-blue-300 underline'
                >
                  Squish
                </Link>{' '}
                - music
              </li>
              <li>Luke Phillips - programming</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

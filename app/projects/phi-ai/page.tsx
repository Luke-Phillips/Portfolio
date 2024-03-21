import Image from 'next/image';
import Link from 'next/link';
import ProjectHeader from '@/app/ui/projectHeader';

export default function Page() {
  return (
    <div>
      <ProjectHeader>
        <div className='flex'>
          <div className='self-end'>PhiAI</div>
        </div>
      </ProjectHeader>
      <div className='lg:m-12 flex flex-col items-center lg:flex-row-reverse lg:justify-between lg:gap-6'>
        <div className='w-5/6 lg:w-auto'>
          <h1 className='mb-3 text-2xl'>Check It Out</h1>
          <div className='flex items-end gap-12 mb-12'>
            <Link
              href='https://github.com/Luke-Phillips/PhiAi'
              target='_blank'
              className=''
            >
              <div className='px-2 py-1 rounded-xl'>
                <Image
                  src='/icon/third-party/github-dark-round.png'
                  width={160}
                  height={160}
                  alt=''
                  className='min-w-24'
                />
              </div>
              <h2 className='text-center mt-2 text-lg'>{'Github ->'}</h2>
            </Link>
            <Link
              href='https://www.nuget.org/packages/PhiAI/'
              target='_blank'
              className=''
            >
              <div className='bg-white px-2 py-1 rounded-xl'>
                <Image
                  src='/icon/third-party/nuget-light.png'
                  width={160}
                  height={160}
                  alt=''
                  className='min-w-24'
                />
              </div>
              <h2 className='text-center mt-2 text-lg'>{'NuGet ->'}</h2>
            </Link>
          </div>
        </div>
        <div className='w-5/6 lg:w-1/2'>
          <h1 className='mb-3 text-2xl'>What is PhiAI?</h1>
          <p className='mb-12'>
            PhiAI is a C# library that can be used to implement your own game
            AI. It is currently in alpha and features the Monte Carlo Tree
            Search Algorithm (MCTS). MCTS is a heuristic algorithm that is great
            for use in perfect information, zero-sum games like chess, go,
            tic-tac-toe, etc.
          </p>
          <h1 className='mb-3 text-2xl'>{"Raison D'etre"}</h1>
          <p className='mb-12'>
            PhiAI began shortly after my obsessive studying of Deepmind&apos;s{' '}
            <Link
              href='https://www.davidsilver.uk/wp-content/uploads/2020/03/unformatted_final_mastering_go.pdf'
              // href='https://www.researchgate.net/publication/292074166_Mastering_the_game_of_Go_with_deep_neural_networks_and_tree_search'
              target='_blank'
              className='text-blue-300 underline'
            >
              AlphaGo
            </Link>{' '}
            and{' '}
            <Link
              href='https://www.davidsilver.uk/wp-content/uploads/2020/03/alphazero_compressed.pdf'
              // href='https://arxiv.org/abs/1712.01815'
              target='_blank'
              className='text-blue-300 underline'
            >
              AlphaZero
            </Link>{' '}
            research papers. Under the hood, both algorithms use a Monte Carlo
            Tree Search (MCTS). MCTS is fairly domain agnostic, so I wanted to
            make a generic implementation that people could use to create AI in
            whatever domain they wanted.
          </p>
        </div>
      </div>
    </div>
  );
}

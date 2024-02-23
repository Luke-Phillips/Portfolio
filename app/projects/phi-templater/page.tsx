import Image from 'next/image';
import Link from 'next/link';
import ProjectHeader from '@/app/ui/projectHeader';

export default function Page() {
  return (
    <div>
      <ProjectHeader>
        <div className='flex'>
          <Image
            src='/icon/project/phi-templater-icon-purple-light-bg.png'
            width={128}
            height={128}
            alt=''
            className=''
          />
          <div className='self-end'>Phi Templater</div>
        </div>
      </ProjectHeader>
      <div className='flex flex-col items-center lg:flex-row-reverse lg:justify-between lg:gap-6'>
        <div className=''>
          <h1 className='mb-3 text-2xl'>Check It Out</h1>
          <div className='flex items-end gap-12 mb-12'>
            <Link
              href='https://marketplace.visualstudio.com/items?itemName=luke-phillips.phitemplater'
              target='_blank'
              className=''
            >
              <Image
                src='/icon/third-party/vscode.png'
                width={160}
                height={160}
                alt=''
                className='min-w-24'
              />
              <h2 className='text-center mt-2 text-lg'>{'Marketplace ->'}</h2>
            </Link>
            <Link
              href='https://github.com/Luke-Phillips/PhiTemplater-VSCodeExtension'
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
        <div className='w-1/2'>
          <h1 className='mb-3 text-2xl'>What is Phi Templater?</h1>
          <p className='mb-12'>
            Phi Templater is a VSCode extension that allows you to create
            re-usable templates that generate files and folders into your
            project. Phi Templater supports variables for dynamic content, and
            in the future, it will support logic such as conditionals and loops
            as well.
          </p>
          <h1 className='mb-3 text-2xl'>{"Raison D'etre"}</h1>
          <p className='mb-12'>
            I built Phi Templater because I enjoy using VSCode, and I love
            building tools and libraries for other developers. Phi Templater
            began as a project to turn{' '}
            <Link
              href='https://github.com/drock07/squirt-cli'
              target='_blank'
              className='text-blue-300 underline'
            >
              squirt-cli
            </Link>{' '}
            into a VS Code extension, but now intends to extend that
            functionality.
          </p>
        </div>
      </div>
    </div>
  );
}

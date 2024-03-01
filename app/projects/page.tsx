import ProjectCard from '@/app/ui/projectCard';
import ProjectHeader from '@/app/ui/projectHeader';

type Project = {
  icon: string;
  title: string;
  subtitle?: string;
  description: string;
  link: string;
  linkText?: string;
};

const projects: Project[] = [
  {
    icon: '/icon/project/phi-templater-icon-no-bg.png',
    title: 'Phi Templater',
    subtitle: 'VS Code Extension',
    description:
      'Generates dynamic files and file structures from user-defined templates with support for variables',
    link: '/projects/phi-templater',
  },
  {
    icon: '/icon/project/hammer-wrench.png',
    title: 'PhiAI',
    subtitle: 'C# library',
    description: 'A library for implementing game AI. Currently in development',
    link: '/projects/phi-ai',
  },
  {
    icon: '/icon/project/godot-game-icon.png',
    title: 'Puzzle Game',
    subtitle: 'CoFi Game Jam',
    description: 'Puzzle game made with Godot for a game jam we held at work',
    link: '/projects/godot-game',
    linkText: 'Play Here',
  },
  {
    icon: '/icon/project/waggle-logo.svg',
    title: 'Waggle',
    subtitle: 'Peer Tutoring Platform',
    description: 'My university senior project',
    link: '/projects/waggle',
  },
  {
    icon: '/icon/project/crossword-icon.png',
    title: 'Crossword',
    subtitle: 'Clojure Project',
    description: 'Crossword puzzle generator',
    link: '/projects/crossword',
  },
  {
    icon: '/icon/project/hammer-wrench.png',
    title: 'And More...',
    description: "I'm always working on new things",
    link: '/projects/crossword',
  },
];

export default function Page() {
  return (
    <div className='flex flex-col justify-start'>
      <ProjectHeader>Featured Projects</ProjectHeader>
      <div className='flex flex-wrap justify-center md:justify-between gap-12 mt-12 mx-12'>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            icon={project.icon}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            link={project.link}
            linkText={project.linkText}
            // gradient
          />
        ))}
      </div>
    </div>
  );
}

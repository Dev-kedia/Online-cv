import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: 'Resume site',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Dev Kedia.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Victoria based <strong className="text-stone-100">Front-End Web Developer</strong>, currently working at{' '}
        <strong className="text-stone-100">EVD Tech.</strong> helping build a modern, mobile-first, domain registrar and
        site builder.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Bodyline Gym</strong>,
        reading my <strong className="text-stone-100">books</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Indian countrysides.</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'D:IMP DOCS\resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Hello! I'm a developer skilled in React, Node.js, and Python. I love collaborating, brainstorming, and solving complex problems. In my free time, I explore new tech and enjoy reading.`,
  aboutItems: [
    {label: 'Location', text: 'Kolkata, WB', Icon: MapIcon},
    {label: 'Age', text: '22', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian / Hindu', Icon: FlagIcon},
    {label: 'Interests', text: 'Books, Working Out, Video-Games', Icon: SparklesIcon},
    {label: 'Study', text: 'SSIPMT University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'EVD. Tech.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 6.5,
      },
      {
        name: 'Bengali',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Next',
        level: 7,
      },
      {
        name: 'Tailwind',
        level: 10,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 3,
      },
      {
        name: 'MongoDB',
        level: 3,
      },
      {
        name: 'Something Else',
        level: 4,
      },
    ],
  },

];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Online Resume',
    description: 'Dynamic, interactive resume showcasing my skills effectively.',
    url: 'https://devresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Medi Market',
    description: 'A user-friendly e-commerce website offering a wide range of medical supplies and equipment, ensuring easy access to essential healthcare products with secure, efficient online shopping experience.',
    url: 'https://Dawaai.com',
    image: porfolioImage2,
  },
  {
    title: 'Netflix Clone',
    description: 'Netflix clone website with sleek design, user-friendly interface, and responsive video streaming features.',
    url: 'https://fetflix.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: '',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: '',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: '',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: '',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: '',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: '',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: '',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: '',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2022',
    location: 'SSIPMT college',
    title: 'Bachelors in Computer Science',
    content: <p>During my BTech in Computer Science, I delved deep into core subjects such as Data Structures, 
      Algorithms, Operating Systems, and Computer Networks. Alongside theoretical knowledge, I gained hands-on 
      experience through lab sessions and real-world projects, which helped me refine my problem-solving skills. 
      These experiences not only strengthened my technical foundation but also equipped me with critical thinking
       and collaborative skills essential for the tech industry.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'January 2024',
    location: 'EVD Technology',
    title: 'Frontend-Web Developer',
    content: (
      <p>
    As a fresher at EVD TECH, I worked on developing web applications using React. I contributed to creating a dynamic 
    and responsive user interface for a dashboard project. This experience enhanced my skills in frontend development 
    and user experience design.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Elon Musk',
      text: 'When something is important enough, you do it even if the odds are not in your favor.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Nikola Tesla',
      text: 'The present is theirs; the future, for which I really worked, is mine.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Madame Curie',
      text: '"Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less."',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message, let me know if you want to reach out to me.',
  items: [
    {
      type: ContactType.Email,
      text: 'd3vkedia@gmail.com',
      href: 'mailto:d3vkedia@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Kolakta WB, India',
      href: 'https://www.google.ca/maps/place/Victoria,+B8.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@dev_kedia_',
      href: 'https://www.instagram.com/dev_kedia_/',
    },
    {
      type: ContactType.Github,
      text: 'Dev-Kedia',
      href: 'https://github.com/Dev-kedia',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Dev-kedia'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/dev-vardhan-kedia-06623b201/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/dev_kedia_/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://x.com/KediaVardhan'},
];

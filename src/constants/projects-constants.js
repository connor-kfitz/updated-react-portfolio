import TFEBackrgound from '../images/projects/2048-background.png';
import FDABackground from '../images/projects/fda-background.png';
import ECDBBackground from '../images/projects/ecdb-background.png';
import OJBackground from '../images/projects/odssjobs-background.png';
import SNAPIBackground from '../images/projects/social-network-background.jpg';
import GSCBackground from '../images/projects/gsc-background.jpg';

export const projects = [
    {
        name: '2048 Clone',
        type: 'Front-end',
        description: 'Replica of the game 2048, developed in React',
        img: TFEBackrgound,
        link: 'https://connor-kfitz.github.io/2048-clone/',
        tags: ['React', 'HTML', 'CSS', 'SCSS', 'Responsive', 'JavaScript', 'Node']
    },
    {
        name: 'Furniture Design Application',
        type: 'Front-end',
        description: 'UI for a furniture design company, developed in React',
        img: FDABackground,
        link: 'https://connor-kfitz.github.io/furniture-design-application/',
        tags: ['React', 'HTML', 'CSS', 'SCSS', 'Responsive', 'JavaScript', 'Node']
    },
    {
        name: 'E-Commerce Dashboard',
        type: 'Front-end',
        description: 'UI for an e-commerce dashboard, developed using HTML & SCSS',
        img: ECDBBackground,
        link: 'https://connor-kfitz.github.io/e-commerce-dashboard/',
        tags: ['HTML', 'CSS', 'SCSS', 'Responsive', 'JavaScript', 'Node']
    },
    {
        name: 'GSC Discord Bot',
        type: 'Back-end',
        description: 'Discord music bot developed using Discord.js',
        img: GSCBackground,
        link: 'https://github.com/connor-kfitz/gsc-discord-bot',
        tags: ['Node', 'MongoDB']
    },
    {
        name: 'Social Network API',
        type: 'Back-end',
        description: 'Social network API built on a MongoDB database',
        img: SNAPIBackground,
        link: 'https://github.com/connor-kfitz/Social-Network-API',
        tags: ['Node', 'MongoDB']
    },
    {
        name: 'Odd Jobs',
        type: 'Full-stack',
        description: 'Job board web application, developed in React',
        img: OJBackground,
        link: 'https://github.com/JoelCronin/OddJobs',
        tags: ['React', 'HTML', 'CSS', 'SCSS', 'JavaScript', 'Node', 'MongoDB', 'GraphQL']
    }
]
import GithubIcon from '../images/github-icon.svg';
import GmailIcon from '../images/gmail-icon.svg';
import LinkedinIcon from '../images/linkedin-icon.svg';

import ReactIcon from '../images/icons/react-icon.svg';
import AngularIcon from '../images/icons/angular-icon.svg';
import JavaScriptIcon from '../images/icons/javascript-icon.svg';
import HtmlIcon from '../images/icons/html-icon.svg';
import CssIcon from '../images/icons/css-icon.svg';
import SassIcon from '../images/icons/sass-icon.svg';
import ResponsiveIcon from '../images/icons/responsive-icon.png';
import ReactColourIcon from '../images/icons/react-colour-icon.svg';
import AngularColourIcon from '../images/icons/angular-colour-icon.svg';
import JavaScriptColourIcon from '../images/icons/javascript-colour-icon.svg';
import HtmlColourIcon from '../images/icons/html-colour-icon.svg';
import CssColourIcon from '../images/icons/css-colour-icon.svg';
import SassColourIcon from '../images/icons/sass-colour-icon.svg';
import ResponsiveColourIcon from '../images/icons/responsive-colour-icon.png';

import MongoDBIcon from '../images/icons/mongodb-icon.png';
import MongoDBColourIcon from '../images/icons/mongodb-colour-icon.png';
import MySQLIcon from '../images/icons/mysql-icon.svg';
import MySQLColourIcon from '../images/icons/mysql-colour-icon.svg';
import NodeIcon from '../images/icons/node-icon.png';
import NodeColourIcon from '../images/icons/node-colour-icon.png';
import GraphQLIcon from '../images/icons/graphql-icon.png';
import GraphQLColourIcon from '../images/icons/graphql-colour-icon.svg';

import ZoneTVIcon from '../images/icons/zoneTV-icon.png';
import BAMIcon from '../images/icons/black-and-mcdonald-icon.png';

import UOFGIcon from '../images/icons/uofg-icon.png';
import UOFTIcon from '../images/icons/uoft-icon.png';

export const navLinks = [
    {
        name: 'Home',
        reference: '#home'
    },
    {
        name: 'About',
        reference: '#about'
    },
    {
        name: 'Projects',
        reference: '#projects'
    },
    {
        name: 'Contact',
        reference: '#contact'
    }
]

export const socialLinks = [
    {
        name: 'Github',
        reference: '',
        icon: GithubIcon,
        // hover: GithubIconHover
    },
    {
        name: 'Gmail',
        reference: '',
        icon: GmailIcon,
        // hover: GmailIconHover
    },
    {
        name: 'Linkedin',
        reference: '',
        icon: LinkedinIcon,
        // hover: LinkedinIconHover
    }
]

export const aboutMeOptions = [
    {
        name: 'Front-End'
    },
    {
        name: 'Back-End'
    },
    {
        name: 'Experience'
    },
    {
        name: 'Education'
    }
]

export const frontEndSkills = [
    {
        name: 'React',
        color: '#8bb7f0',
        icon: ReactIcon,
        iconHover: ReactColourIcon,
        hoverScale: .9
    },
    {
        name: 'Angular',
        color: '#dd2c00',
        icon: AngularIcon,
        iconHover: AngularColourIcon,
        hoverScale: .85
    },
    {
        name: 'Javascript',
        color: '#ffd600',
        icon: JavaScriptIcon,
        iconHover: JavaScriptColourIcon,
        hoverScale: 1.1
    },
    {
        name: 'HTML 5',
        color: '#f2bf22',
        icon: HtmlIcon,
        iconHover: HtmlColourIcon,
        hoverScale: 1
    },
    {
        name: 'CSS 3',
        color: '#35c1f1',
        icon: CssIcon,
        iconHover: CssColourIcon,
        hoverScale: 1
    },
    {
        name: 'SASS',
        color: '#f06292',
        icon: SassIcon,
        iconHover: SassColourIcon,
        hoverScale: 1.15
    },
    {
        name: 'Web Responsiveness',
        color: '#68b1fc',
        icon: ResponsiveIcon,
        iconHover: ResponsiveColourIcon,
        hoverScale: 1.1
    }
]

export const backEndSkills = [
    {
        name: 'NodeJS',
        color: '#7ba836',
        icon: NodeIcon,
        iconHover: NodeColourIcon,
        hoverScale: 1
    },
    {
        name: 'MongoDB',
        color: '#4d9446',
        icon: MongoDBIcon,
        iconHover: MongoDBColourIcon,
        hoverScale: 1
    },
    {
        name: 'MySQL',
        color: '#b2b2b2',
        icon: MySQLIcon,
        iconHover: MySQLColourIcon,
        hoverScale: 1
    },
    {
        name: 'GraphQL',
        color: '#ff4081',
        icon: GraphQLIcon,
        iconHover: GraphQLColourIcon,
        hoverScale: 1.1
    }, 
]

export const experience = [
    {
        title: 'Junior Software Developer',
        company: 'Zone TV',
        icon: ZoneTVIcon,
        filter: 'none',
        date: 'Dec 2022 - Current'
    },
    {
        title: 'Project Coordinator',
        company: 'Black & McDonald',
        icon: BAMIcon,
        filter: 'invert(97%) sepia(99%) saturate(0%) hue-rotate(293deg) brightness(115%) contrast(100%)',
        date: 'Jan 2021 - Mar 2022'
    }
]

export const education = [
    {
        degree: 'Coding Boot Camp Certificate',
        school: 'University of Toronto',
        icon: UOFTIcon,
        gradDate: 'May 2022 - Aug 2022'
    },
    {
        degree: 'Bachelor of Mechanical Engineering',
        school: 'University of Guelph',
        icon: UOFGIcon,
        gradDate: 'Sept 2015 - April 2020'
    }

]

export {
    GithubIcon,
    GmailIcon,
    LinkedinIcon,
    ReactIcon,
    AngularIcon,
    JavaScriptIcon,
    HtmlIcon,
    CssIcon,
    SassIcon,
    ResponsiveIcon,
    ReactColourIcon,
    AngularColourIcon,
    JavaScriptColourIcon,
    HtmlColourIcon,
    CssColourIcon,
    SassColourIcon,
    ResponsiveColourIcon,
    MongoDBIcon,
    MySQLIcon,
    NodeIcon,
    GraphQLIcon,
    MongoDBColourIcon,
    MySQLColourIcon,
    NodeColourIcon,
    GraphQLColourIcon
}
import GithubIcon from '../images/github-icon.svg';
import GmailIcon from '../images/gmail-icon.svg';
import LinkedinIcon from '../images/linkedin-icon.svg';
// import GithubIconHover from '../images/gitc.png';
// import GmailIconHover from '../images/mailc.png';
// import LinkedinIconHover from '../images/linkedc.png';

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

export {
    GithubIcon,
    GmailIcon,
    LinkedinIcon,
    // GithubIconHover,
    // GmailIconHover,
    // LinkedinIconHover
}
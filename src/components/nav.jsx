import * as Constants from '../constants/constants';
import Logo from '../images/PortfolioLogo.png';
import { useEffect, useState } from 'react';

export default function Nav() {

    const [navBackground, setNavBackground] = useState('transparent')

    useEffect(() => {
        document.addEventListener('scroll', event => {
            var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
                if (scrollTop > 0) {
                    setNavBackground('#000726');
                } else {
                    setNavBackground('transparent');
                }
        })
    },[])

    const navStyle = {
        backgroundColor: navBackground
    }

    return (
        <nav className="nav" style={navStyle}>
            <img className="nav__logo" src={Logo} alt="Logo"/>
            <ul className="nav__link-box">
                {Constants.navLinks.map((link) => (
                    <li className="nav__item">
                        <a className="nav__link" href={link.reference}>{link.name}</a>
                    </li>
                ))}
            </ul>
            <ul className="nav__social-box">
                {Constants.socialLinks.map((item) => (
                    <li className="nav__item">
                        <a className="nav__link" href={item.reference}>
                            <img class="nav__social-icon" src={item.icon} alt={`${item.name} icon`}/>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
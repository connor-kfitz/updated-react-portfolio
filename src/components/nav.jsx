import * as Constants from '../constants/constants';
import Logo from '../images/PortfolioLogo.png';

export default function Nav() {

    console.log(window.location.href);

    return (
        <nav className="nav">
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
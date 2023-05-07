import * as Constants from '../constants/constants';
import Logo from '../images/PortfolioLogo.png';
import mobileMenu from '../images/menu-icon.png';
import { useEffect, useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

export default function Nav() {

    const [navBackground, setNavBackground] = useState(false);
    const [currentView, setCurrentView] = useState([0, true]);
    const [navLinkHover, setNavLinkHover] = useState(-1)
    const [socialLinkHover, setSocialLinkHover] = useState(-1);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const scrollPosition = useRef(-1);
    const direction = useRef(true);

    useEffect(() => {
        const verticalOffsets = getViewBreakpoints();
        const navHeight = document.getElementById('nav').offsetHeight;

        document.addEventListener('scroll', event => {
            
            getScrollDirection();
            updateNavBackgroundColour();
            updateActiveNavItem(verticalOffsets, navHeight, direction.current);
        })
    },[])

    function updateNavBackgroundColour() {
        var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        if (scrollTop > 0) {
            setNavBackground(true);
        } else {
            setNavBackground(false);
        }
    }

    function updateActiveNavItem(verticalOffsets, navHeight, direction) {
        let viewIndex = verticalOffsets.length - 1;
        let result;

        verticalOffsets.map((vertDisplacement, key) => {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                result = viewIndex
            } else if((vertDisplacement - navHeight) <= window.pageYOffset) {
                result = key;
            }
        });

        setCurrentView([result, direction])
    }

    function getViewBreakpoints() {
        const views = [];
        const verticalOffsets = [];

        Constants.navLinks.map((link) => views.push(link.reference.substring(1)));

        views.map((view) => {
            let domElement = document.getElementById(view);
            verticalOffsets.push(domElement.offsetTop);
        })

        return verticalOffsets;
    }

    function getScrollDirection() {
        var st = window.pageYOffset || document.documentElement.scrollTop;

        if (st > scrollPosition.current) {
            direction.current = true;
        } else if (st < scrollPosition.current) {
            direction.current = false;
        }
        scrollPosition.current = st <= 0 ? 0 : st;
    }

    function handleNavHoverEffect(hoverRef) {
        setNavLinkHover(hoverRef);
    }

    function handleSocialHoverEffect(hoverRef) {
        setSocialLinkHover(hoverRef);
    }

    function toggleMobileMenu() {
        setShowMobileMenu(previous => !previous); 
    }

    return (
        <nav className="nav" id="nav" style={{backgroundColor: (navBackground || showMobileMenu) ? '#00060f' : 'transparent'}}>
            <img className="nav__logo" src={Logo} alt="Logo"/>
            <ul className="nav__link-box">
                {Constants.navLinks.map((link, key) => (
                    <li className="nav__item" onMouseEnter={() => handleNavHoverEffect(key)} onMouseLeave={() => handleNavHoverEffect(-1)}>
                        <a className="nav__link" href={link.reference}
                            style={{color: (key === currentView[0] || (key === navLinkHover)) ? '#fd4766' : '#fff'}}
                        >
                            {link.name}
                        </a>
                        <div className="nav__animation" 
                            style={{transform: (key === currentView[0]) ? 'scaleX(1)' : 'scaleX(0)',
                                    transformOrigin: (key === currentView[0] && currentView[1]) ? 'left' : (key === currentView[0] && !currentView[1]) ? 'right' : (currentView[1] ? 'right' : 'left'),
                        }}>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="nav__mobile-menu" onClick={() => toggleMobileMenu()}>
                <img className="nav__mobile-menu-icon" src={mobileMenu}/>
            </div>
            
                <CSSTransition in={showMobileMenu} unmountOnExit timeout={500} classNames={"mobile-menu-overlay"}>
                    <div className="nav__mobile-menu-overlay" onClick={() => toggleMobileMenu()}>
                        <ul className="nav__mobile-link-box">
                            {Constants.navLinks.map((link) => (
                                <li className="nav__mobile-item">
                                    <a className="nav__mobile-link" href={link.reference}>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </CSSTransition>
                
            <ul className="nav__social-box">
                {Constants.socialLinks.map((item, key) => (
                    <li className="nav__item" onMouseEnter={() => handleSocialHoverEffect(key)} onMouseLeave={() => handleSocialHoverEffect(-1)}>
                        <a className="nav__link" href={item.reference} target="_blank" rel="noopener noreferrer">
                            <img className="nav__social-icon" src={(key === socialLinkHover) ? item.hover : item.icon} alt={`${item.name} icon`}
                            style={{filter: (key === socialLinkHover) ? null : 'invert(100%) sepia(100%) saturate(0%) hue-rotate(52deg) brightness(106%) contrast(101%)'}}
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
import { useState } from 'react';
import * as Constants from '../constants/constants';

export default function About() {

    const [activeAboutLink, setActiveAboutLink] = useState(0);
    const [iconHover, setIconHover] = useState([false, -1]);

    const active = {
        backgroundColor: '#fd4766'
    }

    function handleLinkClick(linkRef) {
        setActiveAboutLink(linkRef)
    }

    function handleHoverEffect(hoverRef) {
        setIconHover(prev => [!prev[0], hoverRef])
    }

    return (
        <section className="about" id="about">
            <div className="about-content">
                    <h2 className="about-content__header">About Me</h2>
                    <div className="about-content__text">Click on some of the links below...</div>
                    <div className="about-content__box">
                        <ul className="about-content__filter-cont">
                            {Constants.aboutMeOptions.map((item, key) => (
                                <li className="about-content__filter-item" style={key == activeAboutLink ? active : null} onClick={() => handleLinkClick(key)}>{item.name}</li>
                            ))}
                        </ul>
                        {activeAboutLink == 0 ? (
                            <section className="front-end">
                                <ul className="front-end__box">
                                    {Constants.frontEndSkills.map((item, key) => (
                                        <li className="front-end__skill" onMouseEnter={()=>handleHoverEffect(key)} onMouseLeave={()=>handleHoverEffect(key)}>
                                            <div className="front-end__text" style={{'color': (iconHover[0] && iconHover[1] == key) ? item.color : '#fff'}}>{item.name}</div>
                                            <img className="front-end__icon" 
                                                src={(iconHover[0] && iconHover[1] == key) ? item.iconHover : item.icon} 
                                                style={{'filter': (iconHover[0] && iconHover[1] == key) ? 'none' : 'invert(97%) sepia(99%) saturate(0%) hue-rotate(293deg) brightness(115%) contrast(100%)',
                                                        'transform': (iconHover[0] && iconHover[1] == key) ? `translateY(-.5rem) scale(${item.hoverScale})` : 'translateY(0)',
                                                        'animation-name': (iconHover[0] && iconHover[1] == key && key == 0) ? 'rotate' : 'none'
                                                        }}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        ) : null}
                        {activeAboutLink == 1 ? (
                            <section className="back-end">
                                <ul className="back-end__box">
                                    {Constants.backEndSkills.map((item, key) => (
                                        <li className="back-end__skill" onMouseEnter={()=>handleHoverEffect(key)} onMouseLeave={()=>handleHoverEffect(key)}>
                                            <div className="back-end__text" style={{'color': (iconHover[0] && iconHover[1] == key) ? item.color : '#fff'}}>{item.name}</div>
                                            <img className="back-end__icon" 
                                                src={(iconHover[0] && iconHover[1] == key) ? item.iconHover : item.icon} 
                                                style={{'filter': (iconHover[0] && iconHover[1] == key) ? (key == 2 ? 'auto' : 'none') : 'invert(97%) sepia(99%) saturate(0%) hue-rotate(293deg) brightness(115%) contrast(100%)',
                                                        'transform': (iconHover[0] && iconHover[1] == key) ? `translateY(-.5rem) scale(${item.hoverScale})` : 'translateY(0)',
                                                        }}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        ) : null}
                        {activeAboutLink == 2 ? (
                            <section className="experience">
                                <ul className="experience__box">
                                    {Constants.experience.map((item) => (
                                        <li className="experience__item">
                                            <div className="experience__job-info-box">
                                                <div className="experience__role">{item.title}</div>
                                                <div className="experience__job-title-box">
                                                    <div className="experience__company">{item.company}</div>
                                                    <img className="experience__icon" src={item.icon}
                                                        style={{filter: item.filter}}/>    
                                                </div>
                                            </div>
                                            <div className="experience__date">{item.date}</div>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        ) : null}
                        {activeAboutLink == 3 ? (
                            <section className="education">
                                <ul className="education__box">
                                    {Constants.education.map((item) => (
                                        <li className="education__item">
                                            <div className="education__info-box">
                                                <div className="education__title">{item.degree}</div>
                                                <div className="education__school-info-box">
                                                    <div className="education__school">{item.school}</div>
                                                    <img className="education__icon" src={item.icon}/>
                                                </div>
                                            </div>
                                            <div className="education__date">{item.gradDate}</div>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        ) : null}
                </div>
            </div>
        </section>
    )
}
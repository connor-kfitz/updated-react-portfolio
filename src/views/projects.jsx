import * as Constants from '../constants/projects-constants';
import { useState } from 'react';

export default function Projects() {

    const [projectHover, setProjectHover] = useState(-1);

    function handleProjectHoverEffect(hoverRef) {
        setProjectHover(hoverRef)
    }

    return (
        <section className="projects">
            <div className="projects-content">
                <h2 className="projects-content__header">Projects</h2>
                <div className="projects-content__text">Have a look at some of my projects listed below...</div>
                <ul className="project-container">
                    {Constants.projects.map((item, key) => (
                        <li className="project-container__item-box"
                        style={{backgroundImage: `url(${item.img})`}}
                        onMouseEnter={()=>handleProjectHoverEffect(key)} onMouseLeave={()=>handleProjectHoverEffect(-1)}>
                            <div className="project-container__content">
                                <div className="project-container__text-box"
                                     style={{transform: (key === projectHover) ? 'translateY(-5rem)' : '' }}>
                                    <div className="project-container__type">{item.type}</div>
                                    <div className="project-container__title">{item.name}</div>
                                    <div className="project-container__description"
                                        style={{opacity: (key === projectHover ? '1' : '0'),
                                        transition: (key === projectHover) ? '.5s ease-in .3s' : '0s'}}>
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                            <div className='project-container__background-gradient'
                            style={{opacity: (key === projectHover) ? '0' : '1'}}>
                            </div>
                            <div className='project-container__hover-background-gradient'
                            style={{opacity: (key === projectHover) ? '1' : '0'}}>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
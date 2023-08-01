import Button from '../../components/buttons/Button.component';
import Spacer from '../../components/spacers/Spacer.component';

import nodejs from '../../assets/nodejs.png';
import html from '../../assets/html.png';
import reactjs from '../../assets/react.png';
import java from '../../assets/java.png';
import python from '../../assets/python.png';
import lines from '../../assets/lines.png';

import { useMediaQuery } from 'react-responsive';

import styles from './Home.module.scss';
import { useState, useEffect } from 'react';

function Home() {
    const [index, setIndex] = useState(0);
    const texts = [
        "JustStop__",
        "a Developper",
        "a Student"
    ]

    const skills = [
        {
            src: nodejs,
            since: "2019",
            name: "Node.JS"
        },
        {
            src: html,
            since: "2019",
            name: "HTML & CSS"
        },
        {
            src: reactjs,
            since: "2023",
            name: "React.JS"
        },
        {
            src: java,
            since: "2022",
            name: "Java"
        },
        {
            src: python,
            since: "2018",
            name: "Python"
        }
    ]

    const isOnPhone = useMediaQuery({ query: '(max-width: 760px)' })

    useEffect(() => {
        setInterval(() => {
            if(index + 1 == texts.length) setIndex(0);
            else setIndex(index + 1);
        }, 5000)
    })

    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.mainGrid}>
                    <div className={styles.gridElementLeft}>
                        <h1 className={styles.mainTitle}>I am <span className={styles.changingText}>{texts[index]}</span></h1>
                        <p>
                            Welcome to my <span className={styles.importantMessage}>portfolio</span>! 
                            I'm a <span className={styles.importantMessage}>17-year-old</span> web developer with a focus on crafting 
                            engaging <span className={styles.importantMessage}>websites</span> and exciting 
                            <span className={styles.importantMessage}>Minecraft Servers</span>. I'm passionate 
                            about technology and strive to create <span className={styles.importantMessage}>user-friendly</span> 
                            digital experiences. Explore my <span className={styles.importantMessage}>projects</span> and join me on this 
                            <span className={styles.importantMessage}>coding and gaming</span> journey!
                        </p>

                        <Spacer space={'3.5rem'}/>
                        <Button name="Contact Me" link="mailto:m.beaugendre@icloud.com" width={isOnPhone ? '30vw' : '20vw'} padding={'1rem'} />
                    </div>
                    <div className={styles.gridElementRight}>
                        <img src={lines} />
                    </div>
                </div>

                { isOnPhone ? <Spacer space={'5rem'}/> : ''}
                
                <div className={styles.mouseSvgContainer}>
                    <a href="#languages">
                        <div className={styles.mouseSvg}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5C11.4477 5 11 5.44772 11 6V10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10V6C13 5.44772 12.5523 5 12 5Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M4 8C4 3.58172 7.58172 0 12 0C16.4183 0 20 3.58172 20 8V16C20 20.4183 16.4183 24 12 24C7.58172 24 4 20.4183 4 16V8ZM18 8V16C18 19.3137 15.3137 22 12 22C8.68629 22 6 19.3137 6 16V8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8Z" fill="currentColor" /></svg>
                            <div>Scroll</div>
                        </div>
                    </a>
                </div>
            </div>

            { isOnPhone ? <Spacer space={'3rem'}/> : ''}

            <section className={styles.languagesSection} id="languages">
                <div className={styles.languagesSubSection}>
                    <div className={styles.languagesCaroussel}>
                        <span className={styles.languagesAnimation}>Javascript · HTML · CSS · ReactJS · NodeJS · Java · Python · Javascript · HTML · CSS · ReactJS · NodeJS · Java · Python · Javascript · HTML · CSS · ReactJS · NodeJS · Java · Python · Javascript · HTML · CSS · ReactJS · NodeJS · Java · Python · Javascript · HTML · CSS</span>
                    </div>
                </div>
            </section>

            { isOnPhone ? <Spacer space={'10rem'}/> : ''}

            <section className={styles.skillsSection} id="skills">
                <div className={styles.skillsSubSection}>
                    <p className={styles.sectionName}>My Skills</p>
                    <p className={styles.sectionTitle}>Some languages that I use.</p>

                    <div className={styles.skillsGrid}>
                        { skills.map(skill => {
                            return <div className={styles.skillsGridElement}>
                                <div className={styles.skillsGridElementContainer}>
                                    <div className={styles.skillElementImageContainer}>
                                        <img src={skill.src} />
                                    </div>
                                    <Spacer space={'1rem'}/>
                                    <hr />
                                    <div className={styles.skillElementDescriptionContainer}>
                                        <p className={styles.skillElementNote}>Since {skill.since}</p>
                                        <p className={styles.skillElementName}>{skill.name}</p>
                                    </div>
                                </div>
                                <i></i>
                            </div>
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;
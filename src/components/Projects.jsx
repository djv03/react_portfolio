import React from 'react'

import './Projects.css'
import js from '../../assets/logos/jspng.png'
import github from '../../assets/logos/githubpng.png'
import html from '../../assets/logos/htmlpng.png'
import css from '../../assets/logos/csspng.jpg'
import next from '../../assets/logos/nextpng.png'
import node from '../../assets/logos/nodepng.png'
import react from '../../assets/logos/reactpng.png'
import tailwind from '../../assets/logos/tailwindpng.png'
import bootstrap from '../../assets/logos/bootstrappng.png'
import mongodb from '../../assets/logos/mongodbpng.jpg'
function Projects() {
    return (
        <div>
            <div className="project-component" id='projects'>
                <h1>Projects</h1>

                <div className="project-container">
                    <div className="project-card" id="project1">

                        <div className="project-img">
                            <img src="../../assets/projects_SS/merchdjv_ss.png" alt="projectbg" height={23} width={23} />
                        </div>
                        <div className="project-content project-content-right">

                            <h2 className="project-heading">merchdjv</h2>
                            <p className="project-about">
                                full stack personal e-commerce
                            </p>
                            <div className="project-skills-container">
                                <img src={next} alt="JS" />
                                <img src={node} alt="JS" />
                                <img src={tailwind} alt="JS" />
                                <img src={mongodb} alt="JS" />
                            </div>
                            <div className="btn-group">
                                <a href="https://merchdjv.netlify.app/" target="_blank">
                                    <button className="btn-pink btn-project" >View Live</button>
                                </a>
                                <a className='viewcode-container' href="https://github.com/djv03/merchdjv">
                                    <p>view code on</p>
                                    <img className='github-icon' src={github} height={23} width={23} alt="github" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="project-card" id="project2">

                        <div className="project-img">
                            <img src="../../assets/projects_SS/Tazaa_ss.png" alt="projectbg" height={23} width={23} />
                        </div>
                        <div className="project-content project-content-right">

                            <h2 className="project-heading">Tazza</h2>
                            <p className="project-about">
                                daily dose of news, category wise
                            </p>
                            <div className="project-skills-container">
                                <img src={react} alt="JS" />
                                <img src={bootstrap} alt="JS" />
                                <img src={css} alt="JS" />
                            </div>
                            <div className="btn-group">
                                <a href="https://merchdjv.netlify.app/" target="_blank">
                                    <button className="btn-pink btn-project" >View Live</button>
                                </a>
                                <a className='viewcode-container' href="https://github.com/djv03/merchdjv">
                                    <p>view code on</p>
                                    <img className='github-icon' src={github} height={23} width={23} alt="github" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="project-card" id="project3">

                        <div className="project-content ">
                            <div className="project-img">
                                <img src="../../assets/projects_SS/MyWheather_SS.png" alt="projectbg" />
                            </div>
                            <h2 className="project-heading">MyWheather</h2>

                            <p className="project-about">App which tells you wheather of any city across the globe
                            </p>
                            <div className="project-skills-container">
                                <img src={html} alt="JS" />
                                <img src={css} alt="JS" />
                                <img src={js} alt="JS" />
                            </div>
                            <div className="btn-group">
                                <a href="https://djv03wheatherapp.netlify.app/" target="_blank">
                                    <button className=" btn-project">View Live</button>
                                </a>
                                <div >
                                    <a className='viewcode-container' href="https://github.com/djv03/MyWheather-app">
                                        <p>view code on</p>
                                        <img className='github-icon' src={github} height={23} width={23} alt="github" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="project-card" id="project4">

                        <div className="project-img">
                            <img src="../../assets/projects_SS/RSP_ss.png" alt="projectbg" height={23} width={23} />
                        </div>
                        <div className="project-content project-content-right">

                            <h2 className="project-heading">Rock-Paper-Scissor</h2>
                            <div className="project-about">
                                <p className='project-about'>
                                    Your past time game made with HTML,CSS AND Javascript
                                </p>
                            </div>
                            <div className="project-skills-container">

                                <img src={node} alt="JS" />
                                <img src={next} alt="JS" />
                                <img src={tailwind} alt="JS" />
                            </div>
                            <div className="btn-group">
                                <a href="https://djv03rockpaperscissor.netlify.app/" target="_blank">
                                    <button className="btn-pink btn-project">View Live</button>
                                </a>
                                <a className='viewcode-container' href="https://github.com/djv03/rock-paper-scissors">
                                    <p>view code on</p>
                                    <img className='github-icon' src={github} height={23} width={23} alt="github" />
                                </a>

                            </div>
                        </div>
                    </div>

                    <div className="project-card" id="project5">

                        <div className="project-img">
                            <img src="../../assets/projects_SS/Calculator_ss.png" alt="projectbg" />
                        </div>
                        <div className="project-content project-content-right">
                            <h2 className="project-heading">React Calculator</h2>
                            <p className="project-about">
                                Calculator made with react Hooks and state
                            </p>
                            <div className="project-skills-container">
                                <img src={bootstrap} alt="JS" />
                                <img src={react} alt="JS" />
                                <img src={js} alt="JS" />
                            </div>
                            <div className="btn-group">
                                <a href="https://djv03reactcalculator.netlify.app/" target="_blank">

                                    <button className="btn-pink btn-project" >View Live</button>
                                </a>
                                <a className='viewcode-container' href="https://github.com/djv03/Calulator--with-React">
                                    <p>view code on</p>
                                    <img className='github-icon' src={github} height={23} width={23} alt="github" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="project-card" id="project6">

                        <div className="project-img">
                            <img src="../../assets/projects_SS/snake_ss.png" alt="projectbg" height={23} width={23} />
                        </div>
                        <div className="project-content project-content-right">

                            <h2 className="project-heading">classical snake</h2>
                            <p className="project-about">
                                classical snake game-but with twist
                            </p>
                            <div className="project-skills-container">
                                <img src={html} alt="JS" />
                                <img src={css} alt="JS" />
                                <img src={js} alt="JS" />
                            </div>
                            <div className="btn-group">
                                <a href="https://djv03snakegame.netlify.app/" target="_blank">
                                    <button className="btn-pink btn-project" >View Live</button>
                                </a>
                                <a className='viewcode-container' href="https://github.com/djv03/classical_Snake">
                                    <p>view code on</p>
                                    <img className='github-icon' src={github} height={23} width={23} alt="github" />
                                </a>
                            </div>
                        </div>
                    </div>




                </div>



            </div>

        </div>
    )
}

export default Projects

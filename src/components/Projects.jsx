import React from 'react'

import './Projects.css'
import projectimg from '../../assets/projectbg.png'
function Projects() {
    return (
        <div>
            <div className="project-component" id='projects'>
                <h1>Projects</h1>

                <div className="project-container">
                    <div className="project-card" id="project1">
                       
                        <div className="project-content ">
                            <div className="project-img">
                                <img src="../../assets/projectbg.png" alt="projectbg" height={23} width={23} />
                            </div>
                            <h2 className="project-heading">MyWheather</h2>

                            <p className="project-about">App which tells you wheather of any city across the globe
                            </p>
                            <div className="project-skills-container">
                                HTML,CSS,JS
                            </div>
                            <div className="btn-group">
                                <a href="https://djv03wheatherapp.netlify.app/" target="_blank">

                                    <button className=" btn-project">View Live</button>
                                </a>
                                <a href="">
                                    <i title="GitHubLink" className="fa-brands fa-github icon btn-project">view code</i>
                                </a>
                               
                            </div>
                        </div>
                    </div>

                    <div className="project-card" id="project2">
                       
                        <div className="project-img">
                            <img src="../../assets/projectbg.png" alt="projectbg" height={23} width={23} />
                        </div>
                        <div className="project-content project-content-right">
                           
                            <h2 className="project-heading">Rock-Paper-Scissor</h2>
                            <div className="project-about">
                                <p className='project-about'>
                                    Your past time game made with HTML,CSS AND Javascript
                                </p>
                            </div>
                            <div className="project-skill-container">
                                HTML,css ,JS
                            </div>
                            <div className="btn-group">
                                <a href="https://djv03rockpaperscissor.netlify.app/" target="_blank">
                                    <button className="btn-pink btn-project">View Live</button>
                                </a>
                                <a href="">
                                    <i title="GitHubLink" className="fa-brands fa-github icon btn-project">view code</i>
                                </a>
                               
                            </div>
                        </div>
                    </div>

                    <div className="project-card" id="project3">
                        
                        <div className="project-img">
                            <img src="../../assets/projectbg.png" alt="projectbg" height={23} width={23} />
                        </div>
                        <div className="project-content project-content-right">
                          

                            <h2 className="project-heading">React Calculator</h2>
                            <p className="project-about">
                                Calculator made with react Hooks and state
                            </p>
                            <div className="project-skill-container">
                                HTML,css ,JS
                            </div>
                            <div className="btn-group">
                                <a href="https://djv03reactcalculator.netlify.app/" target="_blank">

                                    <button className="btn-pink btn-project" >View Live</button>
                                </a>
                                
                                <a href="">
                                    <i title="GitHubLink" className="fa-brands fa-github icon btn-project">view code</i>
                                </a>
                               
                            </div>
                        </div>
                    </div>

                    <div className="project-card" id="project4">
                        
                        <div className="project-img">
                            <img src="../../assets/projectbg.png" alt="projectbg" height={23} width={23} />
                        </div>
                        <div className="project-content project-content-right">
                           
                            <h2 className="project-heading">project</h2>
                            <p className="project-about">
                                this is the project regarfing the greatest million $ react app of all time
                            </p>
                            <div className="project-skill-container">
                                HTML,css ,JS
                            </div>
                            <div className="btn-group">
                                <button className="btn-pink btn-project">View Live</button>
                                <a href="">
                                    <i title="GitHubLink" className="fa-brands fa-github icon btn-project">view code</i>
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

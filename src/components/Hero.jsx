import React from 'react';
import ReactTypingEffect from 'react-typing-effect';


import './Hero.css';
import profilepic from './profilepic.jpg';

function Hero() {
    return (
        <div>
            <div className="intro" id='hero'>
                <div className="myinfo">
                    <p id="line1">Hi, I am</p>
                    <p id="name">Dhruvin Vekariya</p>

                    <span className="titles">

                    <ReactTypingEffect
                        text={["Developer", "Speaker", "open-source-enthusiast"]}
                        speed={160}
                        eraseSpeed={100}
                        eraseDelay={500}
                        typingDelay={500}
                        />
                    <ReactTypingEffect
                     cursor="."
                        speed={160}
                        eraseSpeed={100}
                        eraseDelay={500}
                        typingDelay={500}
                        displayTextRenderer={(text, i) => {
                            return (
                                <div>
                                    {text.split('').map((char, i) => {
                                        const key = `${i}`;
                                        return (
                                            <span
                                            key={key}
                                                style={{ color: 'cyan' }}
                                                >{char}</span>
                                                );
                                            })}
                                </div>
                            );
                        }}
                        />

                        </span>

                    <div className="btnofintro">
                        <a href="./reume.txt" target="_blank"><button className="btn">Resume</button></a>
                        <a href="./"><button className="btn">About</button></a>
                    </div>

                </div>
                <div className="mypic">
                    <img id="mypic1" src={profilepic} alt="devloper pic" height={23} width={23} />
                </div>
            </div>

        </div>
    )
}

export default Hero

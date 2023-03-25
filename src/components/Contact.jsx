import React from 'react'

import './Contact.css'
function Contact() {

    function click(){
        document.querySelector("#sucess").textContent="Submitted sucessfully!!!"
    }
    return (
        <>
            <div className="connectpage" id='contact'>

                <h2>Wanna have chat? Let's connect</h2>

                
                <div className="form ">
                        <input className="inputs" type="text" placeholder="enter your Name"/>
                        <input className="inputs" type="text" placeholder="enter your email"/>
                        <input className="inputs" type="text" placeholder="enter your contact no."/>
                        <textarea className="inputs" name="drop your message" placeholder="drop your message" id="message"cols="50" rows="10"></textarea>
                </div>

                            <div className="checkbox">
                                <input type="checkbox" id="vehicle1"/>
                                    <label htmlFor='vehicle1'>don't worry! We will not share your data to anyone </label><br/>
                            </div>

                                    <button id="btnsubmit" onClick={click}>Submit</button>
                                    <span id='sucess'></span>

                            </div>
        </>
                        )
}

 export default Contact

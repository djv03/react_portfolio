import React, { useState } from 'react'

import './Contact.css'
function Contact() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        contact: "",
        message: ""
    });

    function click() {
    }
    let name, value
    const getUserData = (event) => {
        // console.log('changing');
        name = event.target.name;
        value = event.target.value;
        setUser({ ...user, [name]: value });
    }
    const postData = async (e) => {
        const { name, email, contact, message } = user
        e.preventDefault();
        let response = await fetch('https://portfolio-contact-e11ce-default-rtdb.firebaseio.com/contactDB.json', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                contact,
                message
                
            })
        });
        if (response) {
            setUser({
                name: "",
                email: "",
                contact: "",
                message: ""
            })
            document.querySelector("#sucess").textContent = "Submitted Sucessfully!!!"
        }
    }
    return (
        <>
            <div className="connectpage" id='contact'>

                <h2>Wanna have chat? Let's connect</h2>

                    <span id='sucess'>   </span>

                <form action="POST" method='POST'>

                    <div className="form">
                        <input className="inputs" type="text" placeholder="enter your Name" value={user.name} onChange={getUserData} name="name" />
                        <input className="inputs" type="text" placeholder="enter your email" value={user.email} onChange={getUserData} name="email" required />
                        <input className="inputs" type="text" placeholder="enter your contact no." value={user.contact} onChange={getUserData} name="contact" />
                        <textarea className="inputs" placeholder="drop your message" id="message" cols="50" rows="10" value={user.message} onChange={getUserData} name="message" ></textarea>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" id="vehicle1" />
                        <label htmlFor='vehicle1'>don't worry! We will not share your data to anyone </label><br />
                    </div>
                    <button id="btnsubmit" onClick={postData}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Contact

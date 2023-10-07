import React from 'react'
import './All.css'

function Contact(props) {
    return (
        <section id='contact' className='noDeco' style={props.myTheme}>
            <div className="container">
                <div className="col-md-6">
                    <h1>Contact Me</h1>
                    <div className="row">
                        <p>If you'd like to get in touch, you can reach me via the following methods:</p>
                        <ul>
                            <li>Email: {props.email}</li>
                            <li>Phone: {props.phoneNo}</li>
                            <li>LinkedIn: <a href={props.linkedin}>My Linked IN</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact

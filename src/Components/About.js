import React from 'react'
import './All.css'
function Home(props) {
    return (
        <section className='pink'>
            <div className="container">
                <div className="col-md-6">
                    <div className='All pink' id='about'>
                        <div id="left" className='col-lg-6'>
                            <h1>About Me</h1>
                            <div>
                                <p>{props.aboutMe}</p>
                            </div>
                        </div>
                        <div id="right">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home


Home.defaultProps = {
    aboutMe: "about me data should be added"
}
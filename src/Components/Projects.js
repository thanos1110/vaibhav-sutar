import React from 'react'
import './All.css'
function Projects(props) {
    let p1 = {
        img: "https://images.unsplash.com/photo-1573165434110-d670adf47863?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        title: "p1title",
        para: "para 1"
    }
    let p2 = {
        img: "https://images.unsplash.com/photo-1603725948263-994a0858083d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        title: "p2title",
        para: "para 2"
    }
    let p3 = {
        img: "https://images.unsplash.com/photo-1524511498335-b0ed6b8e9a69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1826&q=80",
        title: "p3title",
        para: "para 3"
    }
    return (
        <section id="portfolio" className="py-5" style={props.myTheme}>
            <div className="container">
                <h1>Portfolio</h1>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src={p1.img} className="card-img-top" alt="Project 1" />
                            <div className="card-body">
                                <h5 className="card-title">{p1.title}</h5>
                                <p className="card-text">{p1.para}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src={p2.img} className="card-img-top" alt="Project 2" />
                            <div className="card-body">
                                <h5 className="card-title">{p2.title}</h5>
                                <p className="card-text">{p2.para}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src={p3.img} className="card-img-top" alt="Project 3" />
                            <div className="card-body">
                                <h5 className="card-title">{p3.title}</h5>
                                <p className="card-text">{p3.para}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects

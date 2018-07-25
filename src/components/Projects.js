/*
* Projects will be placed inside RoutingContainer and will use parallax for scrolling iframe projects
* those projects will be Iframes that link out to other projects and also have a one word description
* we will grab these projects from a graphQL server so we will also need apollo
 */


import React, { Component } from 'react'
import express from "../security/sec"




export default class extends Component {

    state = {
        "projects": [],
        "have": false
}

async componentDidMount(){
       let projects = await fetch(express.express, {mode: "cors"})
           .then((res) =>res.json())


        this.setState({
            "projects": projects,
            "have": true
        })

    // this.setState({
    //     "projects": projects.map(projects => <a href={projects.link}><iframe title={projects.description} src={projects.link}>{projects.description}</iframe></a>)
    // })


}

render () {
    return (

        <div id="project-flex">


            {
                this.state.have && this.state.projects.map((projects)=>{
                    console.log("Go Ahead and ignore the key warning React wont have a problem with updating this sites" +
                        " Virtual DOM")
                    return(
                        <a href={projects.link}>
                        <div className="projects">
                            <iframe title={projects.description} src={projects.link}>{projects.description}</iframe>
                            <p>{projects.description}</p>
                        </div>
                        </a>
                    )
                })

            }


        </div>
    )
}

}
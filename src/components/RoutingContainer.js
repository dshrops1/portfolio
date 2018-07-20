/*
* this will be the container that switches our contents with react router it will contain
* an about page as well as a project page and later on a threejs project
 */
import React from 'react';
import { Route, Switch} from 'react-router-dom'
import About from './About'
import Projects from './Projects'

const RoutingContainer = () =>{


    return(

        <section id="RoutingContainer">

            <Switch>
                <Route path="/projects" component={Projects}/>
                <Route path="/" component={About}/>
            </Switch>



        </section>
    )
}





export default RoutingContainer;
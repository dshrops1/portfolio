/*
* About will be just a scrolling container thats routed to in Routing container and will consist of
* an about me and a about website
 */

import React, {Fragment} from 'react'


const About =()=>{

    return(
        <Fragment>
            <h1>About</h1>
            <h3>This website:</h3>
            <hr/>
            <p>This website is built using React with custom css, while I thought about using something like materialUI or bootstrap
                I decided the website should be mine and a reflection of me
                and thus I kept the styling simple providing you with what you see.
                For the most part this is a static site hosted on an EC2 aws linux instance running an apache server but it does use an express end point to grab the projects sections. </p>

            <hr/>
            <h3>Myself:</h3>
            <p>I’m a full stack web developer using React, node and express but have no problem quickly picking up other technologies and swapping out parts of my stack.
                Previously I worked in sales within the fitness industry while going to school for computer engineering. I realized there was a big disconnect between what was being taught academically and what the industry was doing. I wanted to build things and learn from the people who are doing the same.
                my mantra is simply “growth” everything I do should grow me as an individual and thus benefit those around me.</p>
        </Fragment>
    )
}


export default About
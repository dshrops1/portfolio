/*
* Navigation is going to be our vertical navigation bar that has links that are routs for our routing container
* routing to about, projects and threejs(later on) as well it will have a photo icon link to both github and linkedin
 */

import React from 'react';
import {Link} from 'react-router-dom'

const Navigator = () => {

    return(
        //nav bar vertical left sid
        <nav id="NavigationGridItem">

            {/*current code is just to test css layout*/}
            <section>
                {/*section with our navigation buttons*/}

                {/*these buttons will be for our full screen size*/}
                <Link to='/'> <input className="contentButtons" type='button' value="About"/></Link>
                <Link to="/projects"> <input className="contentButtons" type="button" value="Projects"/></Link>
                <input className="contentButtons" type="button" value="GitHub"/>
                <input className="contentButtons" type="button" value="LinkedIn"/>

                {/*after a certain cut off generally the longest word we will
                  *then change to a smaller image representing the same thing
                  */}

            </section>

        </nav>
    )
}





export default Navigator
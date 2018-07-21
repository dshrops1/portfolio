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

            <section>

                <Link to='/'>
                    <div className='button-container-1'>
                        <input className="contentButtons" type='button'  value="About"/>
                    </div>
                </Link>

                <Link to="/projects">
                    <div className="button-container-1">
                        <input className="contentButtons" type="button" value="Projects"/>
                    </div>
                </Link>

                <div className="button-container-1">
                     <input className="contentButtons" type="button" value="GitHub"/>
                </div>

                <div className="button-container-1">
                     <input className="contentButtons" type="button" value="LinkedIn"/>
                </div>



            </section>

        </nav>
    )
}





export default Navigator
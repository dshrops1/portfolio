import React from 'react';
import ReactDOM from 'react-dom';


import './base.css'
import Navigation from './components/Navigation'
import PhotoContainer from './components/PhotoContainer'
import RoutingContainer from './components/RoutingContainer'
import {BrowserRouter as Router} from "react-router-dom"

const App = () => {
    return(
        //might need to use hashRouter if I deploy with S3 or keep Browser if I use apache
        <Router>
        <div id="pageGrideContainer">

            <Navigation/>

            {/*code is just to test positioning */}
            <PhotoContainer/>

            <RoutingContainer/>

        </div>
        </Router>


    )
}


ReactDOM.render(<App/>, document.getElementById('root'));


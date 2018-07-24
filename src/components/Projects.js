/*
* Projects will be placed inside RoutingContainer and will use parallax for scrolling iframe projects
* those projects will be Iframes that link out to other projects and also have a one word description
* we will grab these projects from a graphQL server so we will also need apollo
 */


import React, { Component, Fragment } from 'react'

export default class extends Component {

    state = {
}

render () {
    return (

        <Fragment>
            <a href="http://ec2-54-237-162-118.compute-1.amazonaws.com"> <iframe title="TwitchBot" src="http://ec2-54-237-162-118.compute-1.amazonaws.com">Update your browser bub</iframe></a>
        </Fragment>
    )
}

}
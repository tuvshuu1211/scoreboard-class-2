import React from 'react'
import Stats from './Stats'
import Stopwatch from './Stopwatch'
import propTypes from 'prop-types'

const Header = (props)=>{
    return(
        <header>
            <Stats players={props.players}/>
            <h1>{props.title}</h1>
            <Stopwatch />
        </header>
    )
}

Header.propTypes = {
    title: propTypes.string,
    players: propTypes.arrayOf(propTypes.shape({
        name: propTypes.string,
        score: propTypes.number,
        id: propTypes.number
    }))
}

Header.defaultProps = {
    title: 'Game show'
}

export default Header
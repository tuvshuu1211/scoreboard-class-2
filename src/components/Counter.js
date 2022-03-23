import React from 'react'
import propTypes from 'prop-types'
import {Consumer} from './Context'

const Counter = ({index}) =>{
    return(
    <Consumer>
        { value => {
            return(
                <div className='counter'>
                    <button className="counter-action dicrement" onClick={()=>value.actions.changeScore(-1, index)}>-</button>
                    <span className='counter-score'>{ value.players[index].score }</span>
                    <button className="counter-action increment" onClick={()=>value.actions.changeScore(1, index)}> + </button>
                </div>
            )
        }}
    </Consumer>
    )
}

Counter.propTypes = {
    index: propTypes.number,
    score: propTypes.number,
    changeScore: propTypes.func
}

export default Counter
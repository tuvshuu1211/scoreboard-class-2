import React from 'react'
import propTypes from 'prop-types'

const Counter = ({changeScore, score, index}) =>{

    return(
        <div className='counter'>
                <button className="counter-action dicrement" onClick={()=>changeScore(-1, index)}>-</button>
                <span className='counter-score'>{ score }</span>
                <button className="counter-action increment" onClick={()=>changeScore(1, index)}> + </button>
            </div>
    )
}

Counter.propTypes = {
    index: propTypes.number,
    score: propTypes.number,
    changeScore: propTypes.func
}

export default Counter
import React, {PureComponent} from 'react'
import Counter from './Counter'
import propTypes from 'prop-types'

class Player extends PureComponent {

    static propTypes = {
        changeScore: propTypes.func,
        removePlayer: propTypes.func,
        name: propTypes.string.isRequired,
        score: propTypes.number.isRequired,
        id: propTypes.number,
        index: propTypes.number
    }

    render(){
        const { name, id,  score,  index,  changeScore, removePlayer } = this.props     
        return(
            <div className="player">
                <div className="player-name">
                    <button onClick={() => removePlayer(id)} className="remove-player">✖</button>
                    {name}
                </div>
                <Counter index={index} score= {score} changeScore = {changeScore}/>
            </div>
        )
    }
  }

export default Player
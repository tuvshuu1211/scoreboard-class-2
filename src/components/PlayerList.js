import React from 'react'
import Player from './Player'
import { Consumer } from './Context'

const PlayerList =(props)=> {
  return (
      <Consumer>
          {({players, highscore}) =>  (
                <>
                {players.map( (player, index) =>
                    <Player 
                        {...player}
                        key={player.id}
                        index = {index}
                        editName = {props.editName}
                        highscore = {(player.score === highscore)}
                    />
                )}
            </>
              )
          }
      </Consumer>
  )
}

export default PlayerList
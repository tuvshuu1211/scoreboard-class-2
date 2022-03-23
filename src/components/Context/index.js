import React from 'react';

const ScoreboardContext = React.createContext()
const Provider = ScoreboardContext.Provider;

export class Hangagch extends React.Component{
    state = {
      
        players: [
            {
                name: 'Enkhtuvshin',
                score: 0,
                id: 1
            },
            {
                name: 'Dulam',
                score: 0,
                id: 2
            },
            {
                name: 'Jambal',
                score: 0,
                id: 3
            },
            {
                name: 'Jambal1',
                score: 0,
                id: 4
            },
            {
                name: 'Jambal2',
                score: 0,
                id: 5
            }
        ]
    }
  
    lastPlayerID = this.state.players.length - 1
    playersId = this.state.players[this.lastPlayerID].id
  
    changeScore = (delta, index)=> {
      this.setState( prevState => {
        const updatedPlayers = [...prevState.players]
        const updatedPlayer = {...updatedPlayers[index]}
  
        updatedPlayer.score += delta
        
        updatedPlayers[index] = updatedPlayer
  
        return {
          players: updatedPlayers
        }
      } )
    }
  
    removePlayer = (paraID) => {
        this.setState( prevState => {
            return {
                players: prevState.players.filter(p => p.id != paraID)
            }
        })
    }
  
    editName = (name, index)=> {
      this.setState( prevState => {
          const updatedPlayers = [...prevState.players]
          const updatedPlayer = {...updatedPlayers[index]}
    
          updatedPlayer.name = name
          
          updatedPlayers[index] = updatedPlayer
    
          return {
            players: updatedPlayers
          }
        } )
    }
  
    getHightScore = () =>{
        const score = this.state.players.map( p=> p.score)
        const highscore = Math.max(...score)
          if(highscore > 0){
              return highscore
          }else{
              return null
          }
    }
  
    handleAddPlayer = (username) => {
      this.setState({
          players: [
              ...this.state.players,
              {
                  name: username,
                  score: 0,
                  id: this.playersId += 1
              }
          ]
      })
    }
    render(){
        const highscore = this.getHightScore()
        return(
            <Provider value={{
                players: this.state.players,
                actions: {
                    handleAddPlayer: this.handleAddPlayer,
                    editName: this.editName,
                    removePlayer: this.removePlayer,
                    changeScore: this.changeScore,
                },
                highscore: highscore
            }}>
                    
                    {this.props.children}


            </Provider>
        )
    }
};
export const Consumer = ScoreboardContext.Consumer;
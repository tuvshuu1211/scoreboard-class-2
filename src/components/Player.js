import React, {PureComponent} from 'react'
import Counter from './Counter'
import Icon from './Icon'
import {Consumer} from './Context'

class Player extends PureComponent {

    state= {
        name: this.props.name
    }

    changeName = (e) =>{
        e.target.disabled = false
        e.target.focus()
    }

    handleChangeName = (e) =>{
        this.setState({
            name: e.target.value
        })
    }
    

    render(){
        const { id, index } = this.props     
        return(
            <Consumer>
                {value=>{
                    const handleNameSubmit = (e)=>{
                        e.preventDefault()
                        value.actions.editName(this.state.name, index)
                        
                        e.target.children[0].children[0].disabled = true
                    }
                    return(
                        <div className="player">
                            <div className="player-name">

                                <button onClick={ () => 
                                    value.actions.removePlayer(id)} 
                                    className="remove-player"
                                >✖</button>

                                <Icon isHighscore={this.props.highscore} />

                                <form onSubmit={handleNameSubmit} className='playerForm'>
                                    <span onClick={this.changeName}>
                                        <input 
                                            type="text" 
                                            className='playerUserName'
                                            value={this.state.name} 
                                            onChange={this.handleChangeName}
                                            disabled
                                            onBlur={ e => e.target.disabled = true} 
                                            />
                                    </span>
                                </form>
                            </div>
                            <Counter index={index}/>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
  }

export default Player
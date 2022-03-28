import React from "react";
import {Consumer} from './Context'

const AddPlayer = () => {
    
    const inputValue = React.createRef();

    return(
        <Consumer>
            {value=>{
                const handleSubmit = (e) =>{
                    e.preventDefault()
                    if(inputValue.current.value !== ''){
                        value.actions.handleAddPlayer(inputValue.current.value)
                    }
                    e.currentTarget.reset()
                }
                    return(
                        <form onSubmit={handleSubmit} >
                            <input 
                                ref= {inputValue}
                                type="text"
                                placeholder='Add player name'
                            />
                            <input 
                                type="submit"
                                value='Add player'
                              />
                        </form>
                    )
            }}
        </Consumer>
    )
}

export default AddPlayer
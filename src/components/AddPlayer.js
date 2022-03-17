import React from "react";

class AddPlayer extends React.Component {
    
    inputValue = React.createRef();

    handleSubmit = (e) =>{
        e.preventDefault()
        if(this.inputValue.current.value != ''){
            this.props.addPlayer(this.inputValue.current.value)
        }

        e.currentTarget.reset()
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit} >
                <input 
                    ref= {this.inputValue}
                    type="text"
                    placeholder='Add player name'
                />
                <input 
                    type="submit"
                    value='Add player'
                  />
            </form>
        )
    }
}

export default AddPlayer
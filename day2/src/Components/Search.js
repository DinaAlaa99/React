
import { Component } from 'react'
 
class Search extends Component{
    constructor(props) {
        super(props);
        this.state = {
            text:'',
        }
    }
    changeText = (e) =>{
        this.setState({ text: e.target.value })  
        this.props.onKeyChange(e.target.value);
    }
    render() {
        return (
            <div className="Search-Component card">
                <h2 className="Header">Search Component</h2>
            
                <input
                    type="text"
                    value={this.state.text}
                    onChange={this.changeText}
                    />
            
            <div>
                    <h4> KeyWord:{ this.state.text }</h4>        
            </div>
            </div>
        )
    }
}

export default Search
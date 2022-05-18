import {
    Component
} from 'react'

class FirstComponent extends Component {
    constructor() {
        super();
        this.state = {
            input: "",
        }
    }
    reset=()=>{
        this.setState
        ({
            input: " "
        })
    }
    render() {

        return (
            <div className="container">
            <div className="row mt-3">
           <div className="col-6">
            < input type="text" className="mt-1"
            value={this.state.input}
                onChange={
                (e) => {
                    this.setState({
                        input: e.target.value
                    })
                }
            }
            /></div >
          
                    <div className="col-6" >
                    <button type="button" class="btn btn-light "
                    onClick = {
                        this.reset
                    }
                        > reset </button >
        
                </div>
                </div>
                 < div> {
                     this.state.input
                 } </div>
            </div>
        
        )

        }

    }

    export default FirstComponent
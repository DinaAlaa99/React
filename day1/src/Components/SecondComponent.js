import {
    Component
} from "react";

class SecondComponent extends Component {
    currentImage = 0
    images = [
        './images/bigmac.jpg',
        './images/bigtasty.jpg',
        './images/fries.jpg',
        './images/sunday.jpg',
        './images/nuggets.jpg'
    ]
    timer=null;
    constructor() {
        super();
        this.state = {
            image: "./images/bigmac.jpg"
        };
    }

    nextImg = (e) => {

        if (this.currentImage < this.images.length - 1)    
        {
            this.currentImage++;
            this.setState({
                image: this.images[this.currentImage]
            })
            clearInterval(this.timer)
        }

    };
    prevImg = (e) => {

        if (this.currentImage > 0)
        {
            this.currentImage--;
            this.setState({
                image: this.images[this.currentImage]  
            })
           
        }
        else
        {
            clearInterval(this.timer)
            this.currentImage = 0

        }
    }
    start = (e) => {
       this.timer= setInterval(this.show,1000)
    }
    stop = (e) => {
        clearInterval(this.timer);
    }
    show = () => {

            if (this.currentImage < this.images.length-1) {
                this.currentImage++;
                this.setState({
                    image: this.images[this.currentImage]
                });
               
                console.log(this.currentImage);
        }
            else {
                this.currentImage = 0;
                this.setState({
                      image: this.images[this.currentImage]
                  });        
        }
 
  
         
        }


    render() {
        return (
            <div className="container mx-0 mt-5">
                <div className="row">
                    <div class="col-12">
                    <img src={this.state.image } alt=""/>
                    </div>
                    </div>
                <div className="row mt-5 mx-0 mb-3">
                    <div className="col-6">
                    <button className="btn btn-primary" onClick={this.prevImg}>
                        Prev
                        </button>
                    </div>
                     < div className = "col-6" onClick={this.nextImg} >
                      < button className = "btn btn-primary" >
                         Next
                        </button>
                        </div>
                </div>
                < div className="row mx-0" >
                    < div className = "col-6" >
                        < button className = "btn btn-primary" onClick={this.start} >
                          Start
                        </button>
                    </div>
                    < div className = "col-6" >
                    < button className = "btn btn-primary" onClick={this.stop} >
                            Stop
                        </button>
                        </div>
                    </div>
            </div>
        )
    }
}


export default SecondComponent;
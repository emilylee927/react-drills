import React, {Component} from "react";

class Image extends Component {
    constructor(){
        super();
        this.state={

        }
    }

    render(){
        return(
            <div>
                <img src={this.props.url} />
                <div>Error 599</div>
            </div>
        )
    }

}

export default Image;
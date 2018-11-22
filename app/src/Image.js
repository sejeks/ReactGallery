import React from "react";
import './index.css';

class Image extends React.Component {
    constructor() {
        super();

    }

    popupShow() {

    }


    render() {
        return (
            <div className="images" key={"img" + this.props.index}>
                <img src={this.props.imageUrl} onClick={this.popupShow}/>
            </div>
        );
    }
}

export default Image;
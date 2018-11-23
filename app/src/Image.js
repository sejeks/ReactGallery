import React from "react";
import './index.css';
import './Popup.js';

class Image extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="images" key={"img" + this.props.index}>
                <img src={this.props.imageUrl} onClick={() => this.props.popup.object.show(this.props.imageUrl)}/>
            </div>

        );
    }
}

export default Image;
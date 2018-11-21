import React from "react";
import $ from "jquery";
import './index.css';

class Gallery extends React.Component {
    constructor(){
        super();
        this.state = {urls: []};
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount 1");
        $.ajax({
            url: "https://api.vk.com/method/photos.getAll?owner_id=40519043&count=60&access_token=feedf922f2eb2dab1a2660f5502116a355a6e753ec2740235163b7d92e10d73f214f3f0f56b46bc24578d&v=5.52",
            method: 'GET',
            dataType: 'JSONP'
        }).done((data) => {
            let urlsArray = [];
            const dataArray = data.response.items;
            for (let i = 0; i < dataArray.length; i++){
                urlsArray[i] = dataArray[i].photo_604;
            }
            console.log(urlsArray);

            this.setState({urls:urlsArray});
            console.log(this.state);
            console.log("componentDidMount 2");
        })
    }

    renderImage(imageUrl, index) {
        console.log(index);
        return (
            <div className="images" key={"img" + index}>
                <img src={imageUrl} />
            </div>
        );
    }

    get gallery() {
        return (
            <div className="gallery">
                    {this.state.urls.map((imageUrl, index) => this.renderImage(imageUrl, index))}
            </div>
        );
    }

    render() {
        return this.state.urls.length ? this.gallery : null;
    }
}
// Gallery.propTypes = {
//     imageUrls: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
// };
export default Gallery;

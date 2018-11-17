import React from "react";
import $ from "jquery";

class Gallery extends React.Component {
    constructor(){
        super();
        this.state = {urls: []};
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount 1");
        $.ajax({
            url: "https://api.vk.com/method/photos.getAll?owner_id=40519043&count=20&access_token=4c288afa12d1dfbdff6c4a8b6e2adc73cda49fefd0fe87643c8837ee0699deea90dcf5fd8717d12b643d7&v=5.52",
            method: 'GET',
            dataType: 'JSONP'
        }).done((data) => {
            let urlsArray;
            const dataArray= data.response.items;
            for (let i = 0; i < dataArray.length; i++){
                urlsArray[i] = dataArray[i].photo_130;
            }
            this.setState({urls:urlsArray});
            console.log(this.state);
            console.log("componentDidMount 2");
        })
    }

    renderImage(imageUrl) {
        return (
            <div>
                <img src={imageUrl} />
            </div>
        );
    }

    get gallery() {
        return (
            <div className="gallery">
                <div className="images">
                    {this.props.imageUrls.map(imageUrl => this.renderImage(imageUrl))}
                </div>
            </div>
        );
    }

    render() {
        return this.state.urls.length ? this.gallery : null;
    }
}
Gallery.propTypes = {
    imageUrls: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
};
export default Gallery;

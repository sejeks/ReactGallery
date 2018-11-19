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
            url: "https://api.vk.com/method/photos.getAll?owner_id=40519043&count=60&access_token=f5424ccc72c0f4b7497cc7b370050e2c131ef17a9aab98078afcc1377f3a6210528e3cf61fda0288bb991&v=5.52",
            method: 'GET',
            dataType: 'JSONP'
        }).done((data) => {
            let urlsArray = [];
            const dataArray= data.response.items;
            for (let i = 0; i < dataArray.length; i++){
                urlsArray[i] = dataArray[i].photo_604;
            }
            console.log(urlsArray);

            this.setState({urls:urlsArray});
            console.log(this.state);
            console.log("componentDidMount 2");
        })
    }

    renderImage(imageUrl) {
        return (
            <div className="images">
                <img src={imageUrl} key={imageUrl.index}/>
            </div>
        );
    }

    get gallery() {
        return (
            <div className="gallery">
                <div>
                    {this.state.urls.map(imageUrl => this.renderImage(imageUrl))}
                </div>
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

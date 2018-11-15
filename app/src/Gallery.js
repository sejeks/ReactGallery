import React from "react";
import PropTypes from "prop-types";
//asdsds

function imagesLoaded(parentNode) {
    const imgElements = [...parentNode.querySelectorAll("img")];
    for (let i = 0; i < imgElements.length; i += 1) {
        const img = imgElements[i];
        if (!img.complete) {
            return false;
        }
    }
    return true;
}

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        console.log('GrandChild did mount.');
    }

    handleImageChange = () => {
        this.setState({
            loading: !imagesLoaded(this.galleryElement)
        });
    };

    renderSpinner() {
        if (!this.state.loading) {
            return null;
        }
        return <span className="spinner" />;
    }

    renderImage(imageUrl) {
        return (
            <div>
                <img
                    src={imageUrl}
                    onLoad={this.handleImageChange}
                    onError={this.handleImageChange}
                />
            </div>
        );
    }

    render() {
        return (
            <div
                className="gallery"
                ref={element => {
                    this.galleryElement = element;
                }}
            >
                {this.renderSpinner()}
                <div className="images">
                    {this.props.imageUrls.map(imageUrl => this.renderImage(imageUrl))}
                </div>
            </div>
        );
    }
}
Gallery.propTypes = {
    imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default Gallery;
// asdsa

import React from 'react';
import { Link } from 'react-router-dom';
import { Link as PrismicLink, RichText } from 'prismic-reactjs';
import PrismicConfig from '../../prismic-configuration';

const ImageGallery = (props) => {

    const galleryTitle = RichText.render(props.slice.primary.gallery_title);
    const gallery = props.slice.items.map(function (galleryItem, index) {

        const description = RichText.render(galleryItem.image_description, PrismicConfig.linkResolver);
        const link = PrismicLink.url(galleryItem.link, PrismicConfig.linkResolver);
        const label = RichText.asText(galleryItem.link_label);
        let button = null;
        if (link && label !== " ") {
            button = <p className="gallery-link"><Link to={link}>{label}</Link></p>;
        }

        return (
            <div className="gallery-item" key={index}>
                <img src={galleryItem.image.url} alt="" />
                {description}
                {button}
            </div>
        );
    });

    return (
        <section className="image-gallery content-section">
            {galleryTitle}
            <div className="gallery">
                {gallery}
            </div>
        </section>
    );
};

export default ImageGallery;
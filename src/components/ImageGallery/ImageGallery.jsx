import React from 'react';



import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryIyem/ImageGalleryItem';

const ImageGallery = ({ images, handleImgOpenClick }) => {
  return (
    <div>
      <ul className={css.ImageGallery}>
        {images.map(({ webformatURL, tags, id, largeImageURL }) => (
          <ImageGalleryItem
            webformatURL={webformatURL}
            tags={tags}
            key={id}
            largeImageURL={largeImageURL}
            handleImgOpenClick={handleImgOpenClick}
          />
        ))}
      </ul>
    </div>
  );
};


export default ImageGallery;
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({
  tags,
  webformatURL,
  largeImageURL,
  handleImgOpenClick,
}) => {
  return (
    <li className={css.ImageGalleryItem} id="card">
      <img
        className={css.ImageGalleryItemImage}
        onClick={() => {
          handleImgOpenClick(largeImageURL, tags);
        }}
        src={webformatURL}
        alt={tags}
      />
    </li>
  );
};

export default ImageGalleryItem;
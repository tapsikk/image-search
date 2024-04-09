
const ImageCard = ({ image, openModal }) => {
  return (
    <img
      src={image.urls.small}
      alt={image.alt_description}
      className="image"
      onClick={() => openModal(image.urls.regular)}
    />
  );
};

export default ImageCard;
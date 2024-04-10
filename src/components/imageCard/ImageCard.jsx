import './ImageCard.css';

const ImageCard = ({ image, openModal }) => {
  const handleClick = () => {
    openModal(image.urls.regular);
  };

  return (
    <div className="image-card">
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={handleClick}
      />
    </div>
  );
};

export default ImageCard;
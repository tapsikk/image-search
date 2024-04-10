// import Modal from "react-modal";
import "./ImageCard.css";

const ImageCard = ({ image, openModal }) => {
  const handleClick = () => {
    openModal(image.urls.regular);
  };

  return (
    <div className="image-card" onClick={handleClick}>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

export default ImageCard;
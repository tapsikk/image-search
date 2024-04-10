import ImageCard from "/src/components/imageCard/ImageCard";
import './ImageGallery.css';

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className="image-gallery">
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
import ImageCard from "/src/components/imageCard/ImageCard";
// import ImageCard from "./ImageCard";
import "./ImageGallery.css";

const ImageGallery = ({ images, openModal }) => {
  return (
    <div className="image-gallery">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} openModal={openModal} />
      ))}
    </div>
  );
};

export default ImageGallery;
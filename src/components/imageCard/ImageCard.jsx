
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



// import axios from "axios";
// import { useCallback, useEffect, useRef, useState } from "react";
// import { Button, Form } from "react-bootstrap";
// import Modal from "react-modal";
// import { BallTriangle } from "react-loader-spinner";
// import ImageCard from "./components/ImageCard";
// import ErrorMessage from "./components/ErrorMessage";
// import LoadMoreBtn from "./components/LoadMoreBtn";

// const API_URL = "https://api.unsplash.com/search/photos";
// const IMAGES_PER_PAGE = 20;

// function ImageModal({ imageUrl, closeModal }) {
//   return (
//     <Modal
//       isOpen={true}
//       onRequestClose={closeModal}
//       contentLabel="Selected Image"
//     >
//       <img src={imageUrl} alt="Selected" style={{ maxWidth: "100%" }} />
//     </Modal>
//   );
// }

// function App() {
//   const searchInput = useRef(null);
//   const [images, setImages] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [errorMsg, setErrorMsg] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [selectedImageUrl, setSelectedImageUrl] = useState(null);

//   const openImageModal = (imageUrl) => {
//     setSelectedImageUrl(imageUrl);
//   };

//   const closeImageModal = () => {
//     setSelectedImageUrl(null);
//   };

//   const fetchImages = useCallback(async () => {
//     try {
//       if (searchInput.current.value) {
//         setErrorMsg("");
//         setLoading(true);
//         const { data } = await axios.get(
//           `${API_URL}?query=${
//             searchInput.current.value
//           }&page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${
//             import.meta.env.VITE_API_KEY
//           }`
//         );
//         setImages((prevImages) => [...prevImages, ...data.results]);
//         setTotalPages(data.total_pages);
//         setLoading(false);
//       }
//     } catch (error) {
//       setErrorMsg("Error fetching images. Try again later.");
//       console.log(error);
//       setLoading(false);
//     }
//   }, [page]);

//   useEffect(() => {
//     fetchImages();
//   }, [fetchImages]);

//   const resetSearch = () => {
//     setPage(1);
//     setImages([]);
//     fetchImages();
//   };

//   const handleSearch = (event) => {
//     event.preventDefault();
//     resetSearch();
//   };

//   const handleSelection = (selection) => {
//     searchInput.current.value = selection;
//     resetSearch();
//   };

//   return (
//     <div className="container">
//       <h1 className="title">Image Search</h1>
//       {errorMsg && <ErrorMessage message={errorMsg} />}
//       <div className="search-section">
//         <Form onSubmit={handleSearch}>
//           <Form.Control
//             type="search"
//             placeholder="Type something to search..."
//             className="search-input"
//             ref={searchInput}
//           />
//         </Form>
//       </div>
//       <div className="filters">
//         <div onClick={() => handleSelection("nature")}>Nature</div>
//         <div onClick={() => handleSelection("birds")}>Birds</div>
//         <div onClick={() => handleSelection("cats")}>Cats</div>
//         <div onClick={() => handleSelection("shoes")}>Shoes</div>
//       </div>
//       {loading && <BallTriangle color="grey" height={100} width={100} />}
//       <div className="images">
//         {images.map((image) => (
//           <ImageCard
//             key={image.id}
//             image={image}
//             openModal={openImageModal}
//           />
//         ))}
//       </div>
//       {images.length > 0 && page < totalPages && (
//         <LoadMoreBtn onClick={() => setPage(page + 1)} />
//       )}
//       {selectedImageUrl && (
//         <ImageModal imageUrl={selectedImageUrl} closeModal={closeImageModal} />
//       )}
//     </div>
//   );
// }

// export default App;
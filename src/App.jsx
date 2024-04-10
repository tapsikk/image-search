import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import ErrorMessage from "./components/errorMessage/ErrorMessage";
import LoadMoreBtn from "./components/loadMoreBtn/LoadMoreBtn";
import { BallTriangle } from "react-loader-spinner";
import ImageModal from "./components/imageModal/ImageModal";
import ImageGallery from "./components/imageGallery/ImageGallery";
import SearchBar from "./components/searchBar/SearchBar";
import "./App.css";

const API_URL = "https://api.unsplash.com/search/photos";
const IMAGES_PER_PAGE = 20;

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);

  const openImageModal = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
  };

  const closeImageModal = () => {
    setSelectedImageUrl(null);
  };

  const fetchImages = useCallback(async () => {
    try {
      if (searchQuery) {
        setErrorMsg("");
        setLoading(true);
        const { data } = await axios.get(
          `${API_URL}?query=${searchQuery}&page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${
            import.meta.env.VITE_API_KEY
          }`
        );
        setImages((prevImages) => [...prevImages, ...data.results]);
        setTotalPages(data.total_pages);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg("Error fetching images. Try again later.");
      console.log(error);
      setLoading(false);
    }
  }, [page, searchQuery]);

  const handleSearch = (query) => {
    setPage(1);
    setImages([]);
    setSearchQuery(query);
  };

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (searchQuery) {
      fetchImages();
    }
  }, [fetchImages, searchQuery]);

  return (
    <div className="container">
      <h1 className="title">Image Search</h1>
      {errorMsg && <ErrorMessage message={errorMsg} />}
      <SearchBar onSearch={handleSearch} />
      <div className="filters">
        <div onClick={() => handleSearch("nature")}>Nature</div>
        <div onClick={() => handleSearch("birds")}>Birds</div>
        <div onClick={() => handleSearch("cats")}>Cats</div>
        <div onClick={() => handleSearch("shoes")}>Shoes</div>
      </div>
      {loading && <BallTriangle color="grey" height={100} width={100} />}
      <ImageGallery images={images} openModal={openImageModal} />
      {!loading && images.length > 0 && page < totalPages && (
        <LoadMoreBtn onClick={loadMoreImages} />
      )}
      {selectedImageUrl && (
        <ImageModal imageUrl={selectedImageUrl} closeModal={closeImageModal} />
      )}
    </div>
  );
}

export default App;
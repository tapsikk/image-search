import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import ErrorMessage from "./components/errorMessage/ErrorMessage";
import LoadMoreBtn from "./components/loadMoreBtn/LoadMoreBtn";
// import { BallTriangle } from "react-loader-spinner";
import { MutatingDots } from 'react-loader-spinner';
import ImageModal from "./components/imageModal/ImageModal";
import ImageGallery from "./components/imageGallery/ImageGallery";
import SearchBar from "./components/searchBar/SearchBar";
import "./App.css";

const API_URL = "https://api.unsplash.com/search/photos";
const IMAGES_PER_PAGE = 20;
const FILTERS = ["nature", "birds", "cats", "shoes"];

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);

  const openImageModal = (imageUrl) => setSelectedImageUrl(imageUrl);
  const closeImageModal = () => setSelectedImageUrl(null);

  const fetchImages = useCallback(async () => {
    if (!searchQuery) return;

    setErrorMsg("");
    setLoading(true);

    try {
      const { data } = await axios.get(`${API_URL}`, {
        params: {
          query: searchQuery,
          page,
          per_page: IMAGES_PER_PAGE,
          client_id: import.meta.env.VITE_API_KEY,
        },
      });

      if (data.results.length === 0) {
        setErrorMsg("No images found for your query.");
      } else {
        setImages((prevImages) => [...prevImages, ...data.results]);
        setTotalPages(data.total_pages);
      }
    } catch (error) {
      setErrorMsg("Error fetching images. Try again later.");
    } finally {
      setLoading(false);
    }
  }, [page, searchQuery]);

  const handleSearch = (query) => {
    setPage(1);
    setImages([]);
    setSearchQuery(query);
  };

  const loadMoreImages = () => setPage((prevPage) => prevPage + 1);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  return (
    <div className="container">
      <h1 className="title"><a>Image Search</a></h1>
      <SearchBar onSearch={handleSearch} />
      <div className="filters">
        {FILTERS.map((filter) => (
          <div key={filter} onClick={() => handleSearch(filter)}>
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </div>
        ))}
      </div>
      {errorMsg && <ErrorMessage className="errorMsgContainer" message={errorMsg} />}
      
      {loading && (
        <div className="loader-container">
          <MutatingDots color='#7676d7' secondaryColor='#7676d7' height={100} width={100} />
        </div>
      )}
      
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

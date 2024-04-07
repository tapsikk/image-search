import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import "./index.css";
import axios from "axios";

const API_URL = "https://api.unsplash.com/search/photos";
const IMAGES_PER_PAGE = 20;


function App() {
const searchInput = useRef(null);
const [images, setImages] = useState([]);
const [totalPages, setTotalPages] = useState(0);

  const fetchImages = async () => {
    try {
      const { data } = await axios.get(
        `${API_URL}?query=${
          searchInput.current.value
        }&apge=1&per_page=${IMAGES_PER_PAGE}&client_id=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setImages(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(searchInput.current.value);
    fetchImages();
  };
  const handleSelection = (selection) => {
    searchInput.current.value = selection;
    fetchImages();
  };
  return (
    <div className="container">
      <h1 className="title">Image Search</h1>
      <div className="search-section">
        <Form onSubmit={handleSearch}>
          <Form.Control
            type="search"
            placeholder="Type something to search..."
            className="search-input"
            ref={searchInput}
          />
        </Form>
      </div>
      <div className="filters">
        <button onClick={() => handleSelection("nature")}>Nature</button>
        <button onClick={() => handleSelection("birds")}>Birds</button>
        <button onClick={() => handleSelection("cats")}>Cats</button>
        <button onClick={() => handleSelection("shoes")}>Shoes</button>
      </div>
      <div className="images">
        {images.map((image) => {
          return (
            <img
              key={image.id}
              src={image.urls.small}
              alt={image.alt_description}
              className='image'
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

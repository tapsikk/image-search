import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import "./index.css";
import axios from "axios";

const API_URL = "https://api.unsplash.com/search/photos";
const IMAGES_PER_PAGE = 20;

function App() {
  console.log("key", import.meta.env.VITE_API_KEY);
  const searchInput = useRef(null);

  useEffect(() => {
    const getImages = async () => {
     try {
      const result = await axios.get(
            `${API_URL}?query=${searchInput.current.value}&apge=1&per_page=${IMAGES_PER_PAGE}&client_id=${import.meta.env.VITE_API_KEY}`
          );
          console.log('result', result.data);
     } catch (error) {
      console.log(error);
     }
    };

    getImages();
  }, []);

  const fetchImages = () => {
      
  }

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(searchInput.current.value);
  };
  const handleSelection = (selection) => {
    searchInput.current.value = selection;
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
        <div>Nature</div>
        <div>Birds</div>
        <div>Cats</div>
        <div>Shoes</div>
      </div>
    </div>
  );
}

export default App;

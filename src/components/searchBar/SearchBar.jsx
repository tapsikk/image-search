import { Form } from "react-bootstrap";
import { useRef } from "react";

const SearchBar = ({ onSearch }) => {
  const searchInput = useRef(null);

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchInput.current.value);
  };

  return (
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
  );
};

export default SearchBar;
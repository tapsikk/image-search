import { Form } from "react-bootstrap";
import { useRef } from "react";
import { toast } from 'react-toastify';

const SearchBar = ({ onSearch }) => {
  const searchInput = useRef(null);

  const handleSearch = (event) => {
    event.preventDefault();
    const query = searchInput.current.value.trim();

    if (query === '') {
      toast.error('Please enter a search query');
    } else {
      onSearch(query);
    }
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
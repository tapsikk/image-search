import { Button } from "react-bootstrap";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <Button className='buttons' onClick={onClick}>
      <span className="buttonText">Load more</span>
    </Button>
  );
};

export default LoadMoreBtn;

import { Button } from "react-bootstrap";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <Button className="buttons" onClick={onClick}>
      Load more
    </Button>
  );
};

export default LoadMoreBtn;

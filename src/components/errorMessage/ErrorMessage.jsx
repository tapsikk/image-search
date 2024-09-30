import"./ErrorMessage.css";

const ErrorMessage = ({ message }) => {
  return (
    <div className="errorContainer">
      <p className="errorMsg">{message}</p>
    </div>
  );
};

export default ErrorMessage;

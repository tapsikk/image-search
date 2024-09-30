import style from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-container">
      <p className={style.error-msg}>нету такого</p>
    </div>
  );
};

export default ErrorMessage;

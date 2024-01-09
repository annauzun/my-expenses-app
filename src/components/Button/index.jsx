import "./styles.css";

const Button = (props) => {
  const { title, handleClick, type, isFocus } = props;

  return (
    <button
      className={isFocus ? "button focus" : "button"}
      type={type}
      onClick={(event) => handleClick(event)}
    >
      {title}
    </button>
  );
};
export default Button;

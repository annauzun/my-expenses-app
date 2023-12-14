const Button = (props) => {
  const { title, handleClick, type } = props;

  return (
    <button
      className="h-full border border-solid rounded bg-green-400 text-md font-semibold text-black p-2 transition-all ease-out duration-500 hover:bg-green-500 hover:shadow-md"
      type={type}
      onClick={(event) => handleClick(event)}
    >
      {title}
    </button>
  );
};
export default Button;

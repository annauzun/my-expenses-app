const Button = (props) => {
  const { title, handleClick } = props;

  return (
    <button
      className="mr-10 h-full border border-solid border-slate-500 rounded bg-slate-200 text-lg p-2 transition-all ease-out duration-500 hover:scale-105"
      onClick={(event) => handleClick(event)}
    >
      {title}
    </button>
  );
};
export default Button;

const Button = (props) => {
  const { title, handleClick } = props;

  return (
    <button
      className="mx-10 border border-solid border-transparent rounded-3xl bg-slate-200 text-lg p-2 transition-all ease-out duration-500 hover:border-slate-500 hover:scale-x-105 "
      onClick={(event) => handleClick(event)}
    >
      {title}
    </button>
  );
};
export default Button;

import { categories } from "components/ExpenseForm";
console.log(categories);
const Filter = () => {
  return (
    <div className="w-1/2 flex flex-col items-start justify-center ">
      {categories.map((category) => {
        return (
          <p className="my-1 text" key={category}>
            {category} ={" "}
          </p>
        );
      })}
    </div>
  );
};

export default Filter;

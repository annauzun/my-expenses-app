import { categories } from "components/ExpenseForm";
import { payments } from "components/ExpenseForm";



console.log(categories);
console.log(payments);

const Filter = () => {
  return (
    <div className="w-1/2 flex flex-col items-start justify-center ">
      {categories.map((category) => {
        return (
          <p className="my-1 text" key={category}>
            {category} ={"данные"}
          </p>
        );
      })}
      <br />
      {payments.map((payment) => {
        return (
          <p className="my-1 text" key={payment}>
            {payment} ={"данные"}
          </p>
        );
      })}
    </div>
  );
};

export default Filter;

/*

  const pn = groupBy(expenses, "payment");
  console.log(pn);
  Object.entries(pn).forEach(([key, value]) => console.log(`${key}: ${value}`))


  const usersByColor = expenses.reduce((acc, value) => {
    if (!acc[value.payment]) {
      acc[value.payment] = [];
    }
   
    acc[value.payment].push(value);
   
    return acc;
  }, {})
  console.log(usersByColor)
  */
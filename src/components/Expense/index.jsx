const Expense = (props) => {
  const { expense } = props;
  // текущая дата
  let currentDate = new Date().toLocaleDateString();

  return (
    <div className="bg-white border-b-2 py-2 px-8 flex justify-between">
      <div className="flex justify-between w-full">
        <div className="flex flex-col items-start">
          <p className="text-sm rounded-xl bg-green-200 px-2">{currentDate}</p>
          <p className="text-lg text-gray-700">{expense.category}</p>
          <p className="text-sm text-gray-700">{expense.payment}</p>
        </div>
        <p className="text-lg text-gray-700">
          - {expense.cost} ₽
        </p>
      </div>
    </div>
  );
};

export default Expense;

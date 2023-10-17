import ExpenseForm from "components/ExpenseForm";
import Expense from "components/Expense";
import { useState } from "react";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    const newExpenses = [...expenses, expense];
    console.log(newExpenses);
    setExpenses(newExpenses);
  };
  console.log(expenses);

  let sum = 0;
  expenses.forEach(function (expense) {
    sum += parseInt(expense.cost);
    return sum;
  });
  console.log(sum);

  return (
    <div className="bg-green-200/25">
        <div className="flex flex-wrap justify-between">
      <ExpenseForm addExpense={addExpense} />
      <p className="text-lg bg-slate-200 h-8 mx-10 my-5 border border-solid border-transparent rounded-3xl px-4">Всего: {sum}  ₽</p>
      </div>
    <div className="my-4 bg-slate-600">
        {expenses.length === 0 && (
          <div className="py-10 flex flex-col items-center justify-center text-gray-400 text-4xl font-thin text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-14 h-14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
              />
            </svg>

            <p className="flex m-4 px-6">Выберите категорию расходов</p>
          </div>
        )}
        {expenses.length > 0 &&
          expenses.map((expense) => {
            return (
              <Expense
                key={expense.id}
                expense={expense}
                addExpense={addExpense}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Expenses;

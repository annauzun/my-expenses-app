import ExpForm from "components/ExpForm";
import Item from "components/Item";
import { useState, useEffect } from "react";
import { expCategories } from "components/Categories";
import Chart from "components/Chart";

const ExpensesPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setFiltered(items);
  }, [items]);

  useEffect(() => {
    fetch("https://657636a50febac18d403c5b7.mockapi.io/items")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);
  const [filtered, setFiltered] = useState(items);

  const deleteItem = (id) => {
    let newItems = [...items].filter((item) => item.id !== id);
    setItems(newItems);
  };

  const paymentFilter = (payment) => {
    if (payment === "all") {
      setFiltered(items);
    } else {
      let newItems = [...items].filter((item) => item.payment === payment);
      setFiltered(newItems);
    }
  };

  const categoryFilter = (expCategory) => {
    if (expCategory === "all") {
      setFiltered(items);
    } else {
      let newItems = [...items].filter(
        (item) => item.expCategory === expCategory,
      );
      setFiltered(newItems);
    }
  };

  let sum = 0;
  filtered.forEach(function (item) {
    sum += parseInt(item.cost);
    return sum;
  });

  const addItem = (item) => {
    const newItems = [...items, item];
    console.log(newItems);
    setItems(newItems);
  };

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col items-start justify-center pl-8 my-5">
            <p>Сортировать по методу оплаты:</p>
            <div className="flex items-start gap-2">
              <button
                className="shadow-md rounded-lg px-2 py-1 bg-slate-100"
                onClick={() => paymentFilter("all")}
              >
                Все
              </button>
              <button
                className="shadow-md rounded-lg px-2 py-1 bg-slate-100"
                onClick={() => paymentFilter("Карта")}
              >
                Карта
              </button>
              <button
                className="shadow-md rounded-lg px-2 py-1 bg-slate-100"
                onClick={() => paymentFilter("Наличные")}
              >
                Наличные
              </button>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center pl-8 mb-3">
            <p>Сортировать по категории расходов:</p>
            <div className="flex flex-wrap items-start gap-2">
              {expCategories.map((expCategory) => (
                <button
                  className="shadow-md rounded-lg px-2 py-1 bg-slate-100"
                  onClick={() => categoryFilter(expCategory)}
                >
                  {expCategory}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <Chart />
        </div>
      </div>
      <div className="mb-5 text-center text-xl">Итого расходов - {sum} ₽</div>
      <div className="bg-yellow-300/25">
        <ExpForm addItem={addItem} itemCategories={expCategories} />
        <div className="my-4 bg-slate-600/25">
          {items.length === 0 && (
            <div className="py-10 flex flex-col items-center justify-center text-gray-600 text-4xl font-thin text-center">
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
          {items.length > 0 &&
            filtered.map((item) => {
              return (
                <Item
                  key={item.id}
                  item={item}
                  addItem={addItem}
                  deleteItem={deleteItem}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ExpensesPage;

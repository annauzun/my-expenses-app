import IncItem from "components/IncItem";
import { useState, useEffect } from "react";
import IncForm from "components/IncForm";
import { incCategories } from "components/Categories";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const IncomePage = () => {
  const [items, setItems] = useState([]);
  const [filtered, setFiltered] = useState(items);

  useEffect(() => {
    setFiltered(items);
  }, [items]);

  useEffect(() => {
    fetch("https://657636a50febac18d403c5b7.mockapi.io/incItems")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const addItem = (item) => {
    const newItems = [...items, item];
    console.log(newItems);
    setItems(newItems);
  };

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

  const categoryFilter = (incCategory) => {
    if (incCategory === "all") {
      setFiltered(items);
    } else {
      let newItems = [...items].filter(
        (item) => item.incCategory === incCategory,
      );
      setFiltered(newItems);
    }
  };

  let sum = 0;
  items.forEach(function (item) {
    sum += parseInt(item.cost);
    return sum;
  });

  var paymentItems = items.reduce((acc, cur) => {
    const existType = acc.find((a) => a.payment === cur.payment);
    if (existType) {
      existType.cost += +cur.cost;
      return acc;
    }

    acc.push({
      payment: cur.payment,
      cost: +cur.cost,
    });
    return acc;
  }, []);

  var categoryItems = items.reduce((acc, cur) => {
    const existType = acc.find((a) => a.incCategory === cur.incCategory);
    if (existType) {
      existType.cost += +cur.cost;
      return acc;
    }

    acc.push({
      incCategory: cur.incCategory,
      cost: +cur.cost,
    });
    return acc;
  }, []);

  const COLORS = [
    "#7571d2 ",
    "#5686e7 ",
    "#65c1d6 ",
    "#5ebb81 ",
    "#8ad542 ",
    "#ff7070   ",
    "#ffb525 ",
  ];

  return (
    <div>
      <div className="flex">
        <div className="flex flex-col justify-center pl-8 my-3 w-2/5 gap-2">
          <div>
            <p>Сортировать доходы по:</p>
            <div className="flex items-center w-3/4 justify-between">
              <button
                className="lg:w-3/5 shadow-md rounded-lg px-2 py-1 bg-purple-200 hover:bg-green-300"
                onClick={() => paymentFilter("all")}
              >
                Все
              </button>
              <div className="text-md">{sum} ₽</div>
            </div>
          </div>
          <div>
            <p>методу оплаты:</p>
            <div className="flex flex-col items-start gap-2 justify-between w-3/4">
              {paymentItems.map((item) => (
                <li
                  key={item.payment}
                  className="flex items-center w-full justify-between"
                >
                  <button
                    key={item.payment}
                    className="lg:w-3/5 shadow-md rounded-lg px-2 py-1 bg-purple-200 hover:bg-green-300"
                    onClick={() => paymentFilter(item.payment)}
                  >
                    {item.payment}
                  </button>
                  <div className="text-md">{item.cost} ₽</div>
                </li>
              ))}
            </div>
          </div>
          <div>
            <p>по категории:</p>
            <div className="flex flex-col items-start gap-2 justify-between w-3/4">
              {categoryItems.map((item) => (
                <li
                  key={item.incCategory}
                  className="flex items-center w-full justify-between"
                >
                  <button
                    key={item.incCategory}
                    className="lg:w-3/5 shadow-md rounded-lg px-2 py-1 bg-purple-200 hover:bg-green-300"
                    onClick={() => categoryFilter(item.incCategory)}
                  >
                    {item.incCategory}
                  </button>
                  <div className="text-md">{item.cost} ₽</div>
                </li>
              ))}
            </div>
          </div>
        </div>
        <div className="w-3/5">
          <ResponsiveContainer width="100%" height="80%">
            <PieChart width={400} height={400}>
              <Pie
                data={categoryItems}
                cx="40%"
                cy="50%"
                labelLine={true}
                label={({ incCategory, cost }) => `${incCategory}: ${cost} ₽`}
                outerRadius={75}
                fill="#8884d8"
                dataKey="cost"
              >
                {categoryItems.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="mb-5 text-center text-xl">Итого доходов - {sum} ₽</div>
      <div className="bg-purple-300/25">
        <IncForm addItem={addItem} itemCategories={incCategories} />
        <div className="my-4 bg-slate-600/25">
          {filtered.length === 0 && (
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

              <p className="flex m-4 px-6">Выберите категорию доходов</p>
            </div>
          )}
          {filtered.length > 0 &&
            filtered.map((item) => {
              return (
                <IncItem
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

export default IncomePage;

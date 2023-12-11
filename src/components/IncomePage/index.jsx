import Item from "components/Item";
import { useState } from "react";
import IncForm from "components/IncForm";

const IncomePage = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    const newItems = [...items, item];
    console.log(newItems);
    setItems(newItems);
  };
  console.log(items);

  let sum = 0;
  items.forEach(function (item) {
    sum += parseInt(item.cost);
    return sum;
  });
  console.log(sum);

  return (
    <div>
      <div className="text-2xl text-gray-700 flex flex-wrap items-center justify-center py-6">
        <div>Общая сумма доходов: {sum} ₽</div>
      </div>

      <div className="bg-purple-200/25">
        <IncForm addItem={addItem} />

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

              <p className="flex m-4 px-6">Выберите категорию доходов</p>
            </div>
          )}
          {items.length > 0 &&
            items.map((item) => {
              return <Item key={item.id} item={item} addItem={addItem} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default IncomePage;

import { format } from "date-fns";
import { ru } from "date-fns/locale";

let numberFormat = new Intl.NumberFormat();

const Item = (props) => {
  const { item, deleteItem } = props;
  /* текущая дата
  let currentDate = new Date().toLocaleDateString();*/

  return (
    <div className="border-b-2 py-2 px-8 flex justify-between">
      <div className="flex justify-between w-full text-gray-700">
        <div className="flex flex-col items-start">
          <div className="text-sm rounded-xl px-2">
            {format(new Date(item.date), "dd MMMM y", { locale: ru })}
          </div>
          <div className="text-lg">{item.itemCategory}</div>
          <div className="flex gap-4 text-sm">
            {item.payment}
            {item.payment === "Наличные" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                />
              </svg>
            )}

            {item.payment === "Карта" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                />
              </svg>
            )}
          </div>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-lg">{numberFormat.format(item.cost)} ₽</p>
          <button
            key={item.id}
            className="hover:underline cursor-pointer text-sm"
            onClick={() => deleteItem(item.id)}
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;

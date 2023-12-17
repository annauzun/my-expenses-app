import { format } from "date-fns";
import { ru } from "date-fns/locale";

const Item = (props) => {
  const { item, deleteItem } = props;
  /* текущая дата
  let currentDate = new Date().toLocaleDateString();*/

  return (
    <div className="bg-white border-b-2 py-2 px-8 flex justify-between">
      <div className="flex justify-between w-full text-gray-700">
        <div className="flex flex-col items-start">
          <div className="text-sm rounded-xl bg-green-200 px-2">
            {format(new Date(item.date), "dd MMMM y", { locale: ru })}
          </div>
          <div className="text-lg">{item.expCategory}</div>
          <div className="text-sm">{item.payment}</div>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-lg">{item.cost} ₽</p>
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

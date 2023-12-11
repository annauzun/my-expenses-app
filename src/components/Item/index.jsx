import { format } from "date-fns";
import { ru } from "date-fns/locale";

const Item = (props) => {
  const { item } = props;
  /* текущая дата
  let currentDate = new Date().toLocaleDateString();*/

  return (
    <div className="bg-white border-b-2 py-2 px-8 flex justify-between">
      <div className="flex justify-between w-full">
        <div className="flex flex-col items-start">
          <div className="text-sm rounded-xl bg-green-200 px-2">
            {format(item.date, "dd MMMM y", { locale: ru })}
          </div>
          <div className="text-lg text-gray-700">{item.category}</div>
          <div className="text-sm text-gray-700">{item.payment}</div>
        </div>
        <p className="text-lg text-gray-700">{item.cost} ₽</p>
      </div>
    </div>
  );
};

export default Item;

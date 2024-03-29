import Button from "components/Button";
import { useState } from "react";
import { payments } from "categories";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from "date-fns/locale/ru";
import Modal from "components/Modal";

const Form = (props) => {
  const { addItem, itemCategories } = props;
  const [cost, setCost] = useState("");
  const [category, setCategory] = useState(itemCategories[2]);
  const [payment, setPayment] = useState(payments[0]);
  const [startDate, setStartDate] = useState();
  const [id, setId] = useState();
  let [isOpen, setIsOpen] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();

    if (cost && category && payment && startDate) {
      const item = {
        id,
        date: startDate,
        cost: cost,
        itemCategory: category,
        payment: payment,
      };

      addItem(item);
      setId();
      setCost("");
      setStartDate();
      setCategory(itemCategories[2]);
      setPayment(payments[0]);
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div>
      <form
        className="flex flex-wrap justify-between items-center px-10"
        onSubmit={handleClick}
      >
        <div className="max-w-sm mx-10 mt-5 gap-y-4 flex flex-col">
          <div className="grid grid-cols-3 gap-y-4">
            <label className="col-span-1">Дата</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              locale={ru}
              dateFormat="dd.MM.yyyy"
              placeholderText="Введите дату"
              className="border border-solid border-gray-400 rounded w-fit"
            />
          </div>

          <div className="grid grid-cols-3 gap-y-4">
            <label className="col-span-1">Сумма</label>
            <input
              onChange={(event) => {
                const pattern = /^[0-9]{0,12}$/;
                if (pattern.test(event.target.value)) {
                  setCost(event.target.value);
                }
              }}
              name="cost"
              type="text"
              placeholder="Введите сумму"
              value={cost}
              className="col-span-2 border border-solid border-gray-400 rounded"
            />
          </div>
          <div className="grid grid-cols-3 gap-y-4">
            <label className="col-span-1">Категория</label>
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="col-span-2 border border-solid border-gray-400 rounded"
            >
              {itemCategories.map((category) => {
                return <option key={category}>{category}</option>;
              })}
            </select>
          </div>
          <div className="grid grid-cols-3 gap-y-4">
            <label className="col-span-1">Оплата</label>
            <select
              value={payment}
              onChange={(event) => setPayment(event.target.value)}
              className="col-span-2 border border-solid border-gray-400 rounded"
            >
              {payments.map((payment) => {
                return <option key={payment}>{payment}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="w-1/6">
          <Button title="Добавить" handleClick={handleClick} type="submit" />
        </div>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      </form>
    </div>
  );
};

export default Form;

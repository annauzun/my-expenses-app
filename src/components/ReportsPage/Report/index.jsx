import { payments, months } from "categories";
import Button from "components/Button";
import { useState, useEffect } from "react";
import "components/ReportsPage/styles.css";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

let numberFormat = new Intl.NumberFormat();

const Report = ({itemCategories, url}) => {
  const [payment, setPayment] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [category, setCategory] = useState([])
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const filterExp = (event) => {
    event.preventDefault();
    let filtArr = [...items]
      .filter((item) => item.itemCategory === category)
      .filter((item) => item.payment === payment)
      .filter(
        (item) =>
          format(new Date(item.date), "LLLL", {
            locale: ru,
          }) === selectedMonth,
      );
    setFilteredItems(filtArr);
  };

  let sum = 0;
  filteredItems.forEach(function (item) {
    sum += parseInt(item.cost);
    return sum;
  });


  return (
        <>
          <div className="label">
            <label>Месяц</label>
            {
              <select
                value={selectedMonth}
                onChange={(event) =>
                  setSelectedMonth(event.target.value.toLowerCase())
                }
                className="select"
              >
                <option>--Выберите месяц--</option>
                {months.map((month) => {
                  return <option key={month.id}>{month.value}</option>;
                })}
              </select>
            }
          </div>
          <div className="label">
            <label>Категория</label>
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="select"
            >
              <option>--Выберите категорию--</option>
              {itemCategories.map((category) => {
                return <option key={category}>{category}</option>;
              })}
            </select>
          </div>
          <div className="label">
            <label>Оплата</label>
            <select
              value={payment}
              onChange={(event) => setPayment(event.target.value)}
              className="select"
            >
              <option>--Выберите способ оплаты--</option>
              {payments.map((payment) => {
                return <option key={payment}>{payment}</option>;
              })}
            </select>
          </div>
          <div className="my-4 w-1/3 mx-auto">
            <Button title={"Отчет"} handleClick={filterExp} />
          </div>
          <div>
            {filteredItems.length === 0 && (
              <p>
                Выберите критерии для формирования отчета
              </p>
            )}
            {filteredItems.length > 0 &&
              filteredItems.map((item) => {
                return (
                  <div
                    className="border-b-2 py-2 px-8 flex justify-between"
                    key={item}
                  >
                    <div className="flex justify-between w-full text-gray-700">
                      <div className="flex flex-col items-start">
                        <div className="text-sm rounded-xl px-2">
                          {format(new Date(item.date), "dd MMMM y", {
                            locale: ru,
                          })}
                        </div>
                        <div className="text-lg">{item.itemCategory}</div>
                      </div>
                      <div className="flex flex-col items-end">
                        <p className="text-lg">
                          {numberFormat.format(item.cost)} ₽
                        </p>
                        <div className="flex gap-4 text-sm">{item.payment}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="my-4 text-center text-xl">
            Итого за период: {numberFormat.format(sum)} ₽
          </div>
        </>
  );
};

export default Report;

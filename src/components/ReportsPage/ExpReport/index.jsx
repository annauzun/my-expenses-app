import { payments, expCategories, months } from "categories";
import Button from "components/Button";
import { useState, useEffect } from "react";
import "components/ReportsPage/styles.css";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

let numberFormat = new Intl.NumberFormat();

const ExpReport = () => {
  const [paymentExp, setPaymentExp] = useState([]);
  const [expCategory, setExpCategory] = useState([]);
  const [selectedMonthExp, setSelectedMonthExp] = useState(null);
  const [itemsExp, setItemsExp] = useState([]);
  const [filteredItemsExp, setFilteredItemsExp] = useState([]);

  useEffect(() => {
    fetch("https://657636a50febac18d403c5b7.mockapi.io/items")
      .then((response) => response.json())
      .then((data) => setItemsExp(data));
  }, []);

  const filterExp = (event) => {
    event.preventDefault();
    let filtArr = [...itemsExp]
      .filter((item) => item.itemCategory === expCategory)
      .filter((item) => item.payment === paymentExp)
      .filter(
        (item) =>
          format(new Date(item.date), "LLLL", {
            locale: ru,
          }) === selectedMonthExp,
      );
    setFilteredItemsExp(filtArr);
  };

  let sumExp = 0;
  filteredItemsExp.forEach(function (item) {
    sumExp += parseInt(item.cost);
    return sumExp;
  });


  return (
        <>
          <div className="label">
            <label>Месяц</label>
            {
              <select
                value={selectedMonthExp}
                onChange={(event) =>
                  setSelectedMonthExp(event.target.value.toLowerCase())
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
              value={expCategory}
              onChange={(event) => setExpCategory(event.target.value)}
              className="select"
            >
              <option>--Выберите категорию--</option>
              {expCategories.map((category) => {
                return <option key={category}>{category}</option>;
              })}
            </select>
          </div>
          <div className="label">
            <label>Оплата</label>
            <select
              value={paymentExp}
              onChange={(event) => setPaymentExp(event.target.value)}
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
            {filteredItemsExp.length === 0 && (
              <p>
                В текущем месяце нет расходов по выбранным критериям. Выберите
                другие критерии для формирования нового отчета
              </p>
            )}
            {filteredItemsExp.length > 0 &&
              filteredItemsExp.map((item) => {
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
            Итого за период: {numberFormat.format(sumExp)} ₽
          </div>
        </>
  );
};

export default ExpReport;

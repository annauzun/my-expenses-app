import { payments, expCategories, months, incCategories } from "categories";
import Button from "components/Button";
import { useState, useEffect } from "react";
import "./styles.css";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

let numberFormat = new Intl.NumberFormat();

const ReportsPage = () => {
  const [payment, setPayment] = useState(payments[0]);
  const [expCategory, setExpCategory] = useState(expCategories[0]);
  const [incCategory, setIncCategory] = useState(incCategories[0]);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [itemsExp, setItemsExp] = useState([]);
  const [itemsInc, setItemsInc] = useState([]);
  const [filteredItemsExp, setFilteredItemsExp] = useState([]);
  const [filteredItemsInc, setFilteredItemsInc] = useState([]);

  useEffect(() => {
    fetch("https://657636a50febac18d403c5b7.mockapi.io/items")
      .then((response) => response.json())
      .then((data) => setItemsExp(data));
  }, []);

  const filterExp = (event) => {
    event.preventDefault()
    let filtArr = [...itemsExp]
      .filter((item) => item.itemCategory === expCategory)
      .filter((item) => item.payment === payment)
      .filter((item) => format(new Date(item.date), "LLLL", {
        locale: ru,
      }) === selectedMonth);
    setFilteredItemsExp(filtArr);
    
  };

  let sumExp = 0;
  filteredItemsExp.forEach(function (item) {
    sumExp += parseInt(item.cost);
    return sumExp;
  });

  useEffect(() => {
    fetch("https://657636a50febac18d403c5b7.mockapi.io/incItems")
      .then((response) => response.json())
      .then((data) => setItemsInc(data));
  }, []);

  const filterInc = () => {
    let filtArr = [...itemsInc]
      .filter((item) => item.itemCategory === incCategory)
      .filter((item) => item.payment === payment)
      .filter((item) => format(new Date(item.date), "LLLL", {
        locale: ru,
      }) === selectedMonth);
    setFilteredItemsInc(filtArr);
  };

  let sumInc = 0;
  filteredItemsInc.forEach(function (item) {
    sumInc += parseInt(item.cost);
    return sumInc;
  });
console.log(selectedMonth)
  /*let sumDif = sumInc - sumExp*/

  return (
    <div className="flex flex-col">
      <div className="flex my-10">
        <div className="bg-purple-100 w-1/2 h-full text-xl text-center py-4">
          Доходы
          <div className="label">
            <label>Месяц</label>
            {
              <select
                value={selectedMonth}
                onChange={(event) => setSelectedMonth(event.target.value)}
                className="select"
              >
                {months.map((month) => {
                  return <option key={month.id}>{month.value}</option>;
                })}
              </select>
            }
          </div>
          <div className="label">
            <label className="col-span-1">Категория</label>
            <select
              value={incCategory}
              onChange={(event) => setIncCategory(event.target.value)}
              className="select"
            >
              {incCategories.map((category) => {
                return <option key={category}>{category}</option>;
              })}
            </select>
          </div>
          <div className="label">
            <label className="col-span-1">Оплата</label>
            <select
              value={payment}
              onChange={(event) => setPayment(event.target.value)}
              className="select"
            >
              {payments.map((payment) => {
                return <option key={payment}>{payment}</option>;
              })}
            </select>
          </div>
          <div className="my-4 w-1/3 mx-auto">
            <Button title={"Отчет"} handleClick={filterInc} />
          </div>
          <div>
            {filteredItemsInc.length === 0 && (
              <p>
                В текущем месяце нет доходов по выбранным критериям. Выберите
                другие критерии для формирования нового отчета
              </p>
            )}
            {filteredItemsInc.length > 0 &&
              filteredItemsInc.map((item) => {
                return (
                  <div className="border-b-2 py-2 px-8 flex justify-between">
                    <div
                      className="flex justify-between w-full text-gray-700"
                      key={item}
                    >
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
            <div className="my-4 text-center text-xl">
              Итого за период: {numberFormat.format(sumInc)} ₽
            </div>
          </div>
        </div>
        <div className="bg-green-100 w-1/2 h-full text-xl text-center py-4">
          Расходы
          <div className="label">
            <label>Месяц</label>
            {
              <select
                value={selectedMonth}
                onChange={(event) => setSelectedMonth(event.target.value.toLowerCase())}
                className="select"
              >
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
              {expCategories.map((category) => {
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
        </div>
      </div>
      {/*<div className="text-center text-2xl my-4">
            Баланс: {numberFormat.format(sumDif)} ₽
            </div>*/}
    </div>
  );
};

export default ReportsPage;

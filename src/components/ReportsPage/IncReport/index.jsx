import { payments, months, incCategories } from "categories";
import Button from "components/Button";
import { useState, useEffect } from "react";
import "components/ReportsPage/styles.css";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

let numberFormat = new Intl.NumberFormat();

const IncReport = () => {
  const [paymentInc, setPaymentInc] = useState([]);
  const [incCategory, setIncCategory] = useState([]);
  const [selectedMonthInc, setSelectedMonthInc] = useState(null);
  const [itemsInc, setItemsInc] = useState([]);
  const [filteredItemsInc, setFilteredItemsInc] = useState([]);

  useEffect(() => {
    fetch("https://657636a50febac18d403c5b7.mockapi.io/incItems")
      .then((response) => response.json())
      .then((data) => setItemsInc(data));
  }, []);

  const filterInc = () => {
    let filtArr = [...itemsInc]
      .filter((item) => item.itemCategory === incCategory)
      .filter((item) => item.payment === paymentInc)
      .filter(
        (item) =>
          format(new Date(item.date), "LLLL", {
            locale: ru,
          }) === selectedMonthInc,
      );
    setFilteredItemsInc(filtArr);
  };

  let sumInc = 0;
  filteredItemsInc.forEach(function (item) {
    sumInc += parseInt(item.cost);
    return sumInc;
  });

  /*let sumDif = sumInc - sumExp*/

  return (
    
        <>
          <div className="label">
            <label>Месяц</label>
            {
              <select
                value={selectedMonthInc}
                onChange={(event) => setSelectedMonthInc(event.target.value)}
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
            <label className="col-span-1">Категория</label>
            <select
              value={incCategory}
              onChange={(event) => setIncCategory(event.target.value)}
              className="select"
            >
              <option>--Выберите категорию--</option>
              {incCategories.map((category) => {
                return <option key={category}>{category}</option>;
              })}
            </select>
          </div>
          <div className="label">
            <label className="col-span-1">Оплата</label>
            <select
              value={paymentInc}
              onChange={(event) => setPaymentInc(event.target.value)}
              className="select"
            >
              <option>--Выберите способ оплаты--</option>
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
        </>
      
  );
};

export default IncReport;

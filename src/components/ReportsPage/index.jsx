/*import Button from "components/Button";

import { useState } from "react";
import {
  expCategories,
  incCategories,
  payments,
  months,
} from "components/Categories";

const ReportsPage = () => {
  const [category, setCategory] = useState();
  const [month, setMonth] = useState();
  const [payment, setPayment] = useState();
   

  const [filtered, setFiltered] = useState(items);

  const itemFilter = (selectedCategory) => {
    let newArray = [...items].filter(
      (item) => item.category === selectedCategory,
    );
    setFiltered(newArray);
  };

  return (
    <div className="flex flex-col gap-5 items-center justify-center my-3">
      <div className="flex flex-col text-gray-700 items-left justify-center">
        <div className="text-xl">Расходы</div>
        <div className="mx-10 mt-5 gap-y-2 flex flex-col">
          <div className="flex gap-10 justify-between">
            <label className="col-span-1">по категориям</label>
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              handleClick={itemFilter}
              className="col-span-2 border border-solid border-gray-400 rounded"
            >
              {expCategories.map((category) => {
                return <option key={category}>{category}</option>;
              })}
            </select>
          </div>

          <div className="flex gap-10 justify-between">
            <label className="col-span-1">по месяцам</label>
            <select
              value={month}
              onChange={(event) => setMonth(event.target.value)}
              className="col-span-2 border border-solid border-gray-400 rounded"
            >
              {months.map((month) => {
                return <option key={month}>{month}</option>;
              })}
            </select>
          </div>

          <div className="flex gap-10 justify-between">
            <label className="col-span-1">по методу оплаты</label>
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
        <div className="text-xl ">Доходы</div>
        <div className="mx-10 mt-5 gap-y-2 flex flex-col">
          <div className="flex gap-10 justify-between">
            <label className="col-span-1"> по категориям</label>
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="col-span-2 border border-solid border-gray-400 rounded"
            >
              {incCategories.map((category) => {
                return <option key={category}>{category}</option>;
              })}
            </select>
          </div>

          <div className="flex gap-10 justify-between">
            <label className="col-span-1">по месяцам</label>
            <select
              value={month}
              onChange={(event) => setMonth(event.target.value)}
              className="col-span-2 border border-solid border-gray-400 rounded"
            >
              {months.map((month) => {
                return <option key={month}>{month}</option>;
              })}
            </select>
          </div>

          <div className="flex gap-10 justify-between">
            <label className="col-span-1">по методу оплаты</label>
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
      </div>
      <Button
        title="Сформировать отчет"
        //handleClick={itemFilter}
        type="submit"
      />
    </div>
  );
};

export default ReportsPage;
*/
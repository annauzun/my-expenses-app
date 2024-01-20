import Button from "components/Button";
import Loader from "components/Loader";
import { useState, useEffect } from "react";
import Chart from "components/Chart";
import Form from "components/Form";
import Item from "components/Item";

import Empty from "components/Empty";
import { expCategories } from "categories";
let numberFormat = new Intl.NumberFormat();

const FilteredItems = (props) => {
  const { urlItems, itemCategories } = props;
  const [items, setItems] = useState([]);
  const [filtered, setFiltered] = useState(items);

  useEffect(() => {
    setFiltered(items);
  }, [items]);

  useEffect(() => {
    fetch(urlItems)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const addItem = (item) => {
    const newItems = [item, ...items];
    console.log(newItems);
    setItems(newItems);
  };

  const deleteItem = (id) => {
    let newItems = [...items].filter((item) => item.id !== id);
    setItems(newItems);
  };

  const paymentFilter = (payment) => {
    if (payment === "all") {
      setFiltered(items);
    } else {
      let newItems = [...items].filter((item) => item.payment === payment);
      setFiltered(newItems);
    }
  };

  const categoryFilter = (itemCategory) => {
    if (itemCategory === "all") {
      setFiltered(items);
    } else {
      let newItems = [...items].filter(
        (item) => item.itemCategory === itemCategory,
      );
      setFiltered(newItems);
    }
  };

  let sum = 0;
  items.forEach(function (item) {
    sum += parseInt(item.cost);
    return sum;
  });

  var paymentItems = items.reduce((acc, cur) => {
    const existType = acc.find((a) => a.payment === cur.payment);
    if (existType) {
      existType.cost += +cur.cost;
      return acc;
    }

    acc.push({
      payment: cur.payment,
      cost: +cur.cost,
    });
    return acc;
  }, []);

  var categoryItems = items.reduce((acc, cur) => {
    const existType = acc.find((a) => a.itemCategory === cur.itemCategory);
    if (existType) {
      existType.cost += +cur.cost;
      return acc;
    }

    acc.push({
      itemCategory: cur.itemCategory,
      cost: +cur.cost,
    });
    return acc;
  }, []);

  if (items.length === 0)
    return (
      <div className="mt-20 text-center">
        <Loader />
      </div>
    );
  return (
    <>
      <div className="w-full">
        <div className="flex">
          <div className="flex flex-col justify-center pl-8 my-3 w-2/5 gap-2">
            <div>
              <p>Сортировать по:</p>
              <div className="flex items-center w-3/4 justify-between">
                <div className="w-3/5">
                  <Button
                    handleClick={() => paymentFilter("all")}
                    title={"Все"}
                  />
                </div>
                <div className="text-base">{numberFormat.format(sum)} ₽</div>
              </div>
            </div>

            <div>
              <p>методу оплаты:</p>
              <div className="flex flex-col items-start gap-2 justify-between w-3/4">
                {paymentItems.map((item) => (
                  <li
                    key={item.payment}
                    className="flex items-center w-full justify-between"
                  >
                    <div className="w-3/5">
                      <Button
                        key={item.payment}
                        handleClick={() => paymentFilter(item.payment)}
                        title={item.payment}
                      />
                    </div>
                    <div className="text-base">
                      {numberFormat.format(item.cost)} ₽
                    </div>
                  </li>
                ))}
              </div>
            </div>
            <div>
              <p>категории:</p>
              <div className="flex flex-col items-start gap-2 justify-between w-3/4">
                {categoryItems.map((item) => (
                  <li
                    key={item.itemCategory}
                    className="flex items-center w-full justify-between"
                  >
                    <div className="w-3/5">
                      <Button
                        key={item.itemCategory}
                        handleClick={() => categoryFilter(item.itemCategory)}
                        title={item.itemCategory}
                      />
                    </div>
                    <div className="text-base">
                      {numberFormat.format(item.cost)} ₽
                    </div>
                  </li>
                ))}
              </div>
            </div>
          </div>
          <div className="w-3/5">
            <Chart categoryItems={categoryItems} />
          </div>
        </div>
        <div className="mb-5 text-center text-xl">
          Итого - {numberFormat.format(sum)} ₽
        </div>

        <div className="bg-green-100">
          <Form addItem={addItem} itemCategories={itemCategories} />
          <div className="my-4 bg-slate-400/25">
            {filtered.length === 0 && (
              <Empty title="Выберите категорию расходов" />
            )}
            {filtered.length > 0 &&
              filtered.map((item) => {
                return (
                  <Item key={item.id} item={item} deleteItem={deleteItem} />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilteredItems;

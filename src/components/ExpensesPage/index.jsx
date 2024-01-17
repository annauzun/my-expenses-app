import Form from "components/Form";
import Item from "components/Item";
import { useState, useEffect } from "react";
import Chart from "components/Chart";
import Empty from "components/Empty";
import { expCategories, months } from "categories";
import Loader from "components/Loader";
import FilteredItems from "components/FilteredItems";
import { getMonth } from "date-fns";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

const ExpensesPage = () => {
  const [items, setItems] = useState([]);
  const [filtered, setFiltered] = useState(items);

  useEffect(() => {
    setFiltered(items);
  }, [items]);

  useEffect(() => {
    fetch("https://657636a50febac18d403c5b7.mockapi.io/items")
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

  const dateFilter = (date) => {
    if (date === "all") {
      setFiltered(items);
    } else {
      let newItems = [...items].filter((item) => item.date === date);
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

  let numberFormat = new Intl.NumberFormat()
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

  var dateItems = items.reduce((acc, cur) => {
    const existType = acc.find((a) => a.x === cur.x);
    console.log(existType);
    if (existType) {
      existType.cost += +cur.cost;
      return acc;
    }

    acc.push({
      month: cur.date,
      cost: +cur.cost,
    });
    return acc;
  }, []);
  console.log(dateItems);

  var categoryItems = items.reduce((acc, cur) => {
    const existType = acc.find((a) => a.itemCategory === cur.itemCategory);
    console.log(existType);
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
  console.log(categoryItems);
  if (items.length === 0)
    return (
      <div className="mt-20 text-center">
        <Loader />
      </div>
    );

  return (
    <div>
      <div className="flex">
        <FilteredItems
          paymentFilter={paymentFilter}
          paymentItems={paymentItems}
          categoryFilter={categoryFilter}
          categoryItems={categoryItems}
          dateFilter={dateFilter}
          dateItems={dateItems}
          sum={sum}
        />
        <div className="w-3/5">
          <Chart categoryItems={categoryItems} />
        </div>
      </div>
      <div className="mb-5 text-center text-xl">Итого расходов - {numberFormat.format(sum)} ₽</div>
      <div className="bg-green-100">
        <Form addItem={addItem} itemCategories={expCategories} />
        <div className="my-4 bg-slate-400/25">
          {filtered.length === 0 && (
            <Empty title="Выберите категорию расходов" />
          )}
          {filtered.length > 0 &&
            filtered.map((item) => {
              return (
                <Item
                  key={item.id}
                  item={item}
                  addItem={addItem}
                  deleteItem={deleteItem}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ExpensesPage;

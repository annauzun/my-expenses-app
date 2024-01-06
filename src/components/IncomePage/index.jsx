import Item from "components/Item";
import { useState, useEffect } from "react";
import Form from "components/Form";
import { incCategories } from "categories";
import Empty from "components/Empty";
import Chart from "components/Chart";
import FilteredItems from "components/FilteredItems";
import Loader from "components/Loader";

const IncomePage = () => {
  const [items, setItems] = useState([]);
  const [filtered, setFiltered] = useState(items);

  useEffect(() => {
    setFiltered(items);
  }, [items]);

  useEffect(() => {
    fetch("https://657636a50febac18d403c5b7.mockapi.io/incItems")
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
    <div>
      <div className="flex">
        <FilteredItems
          paymentFilter={paymentFilter}
          paymentItems={paymentItems}
          categoryFilter={categoryFilter}
          categoryItems={categoryItems}
          sum={sum}
        />
        <div className="w-3/5">
          <Chart categoryItems={categoryItems} />
        </div>
      </div>
      <div className="mb-5 text-center text-xl">Итого доходов - {sum} ₽</div>
      <div className="bg-purple-300/25">
        <Form addItem={addItem} itemCategories={incCategories} />
        <div className="my-4 bg-slate-600/25">
          {filtered.length === 0 && (
            <Empty title="Выберите категорию доходов" />
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

export default IncomePage;

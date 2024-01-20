import Button from "components/Button";


let numberFormat = new Intl.NumberFormat();

const FilteredItems = (props) => {

  const { paymentFilter, paymentItems, categoryFilter, categoryItems, sum } = props

  return (
    <div className="flex flex-col justify-center pl-8 my-3 w-2/5 gap-2">
      <div>
        <p>Сортировать по:</p>
        <div className="flex items-center w-3/4 justify-between">
          <div className="w-3/5">
            <Button handleClick={() => paymentFilter("all")} title={"Все"} />
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
  );
};

export default FilteredItems;

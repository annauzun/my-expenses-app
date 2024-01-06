const FilteredItems = ({ paymentFilter, paymentItems, categoryFilter, categoryItems, sum }) => {
    return (
        <div className="flex flex-col justify-center pl-8 my-3 w-2/5 gap-2">
          <div>
            <p>Сортировать расходы по:</p>
            <div className="flex items-center w-3/4 justify-between">
              <button
                className="lg:w-3/5 shadow-md rounded-lg px-2 py-1 bg-green-200 focus:bg-green-400"
                onClick={() => paymentFilter("all")}
              >
                Все
              </button>
              <div className="text-md">{sum} ₽</div>
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
                  <button
                    key={item.payment}
                    className="lg:w-3/5 shadow-md rounded-lg px-2 py-1 bg-green-200 focus:bg-green-400"
                    onClick={() => paymentFilter(item.payment)}
                  >
                    {item.payment}
                  </button>
                  <div className="text-md">{item.cost} ₽</div>
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
                  <button
                    key={item.itemCategory}
                    className="lg:w-3/5 shadow-md rounded-lg px-2 py-1 bg-green-200 focus:bg-green-400"
                    onClick={() => categoryFilter(item.itemCategory)}
                  >
                    {item.itemCategory}
                  </button>
                  <div className="text-md">{item.cost} ₽</div>
                </li>
              ))}
            </div>
          </div>
        </div>
    )
}

export default FilteredItems
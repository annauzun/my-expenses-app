import { expCategories } from "categories";
import FilteredItems from "components/FilteredItems";

const ExpensesPage = () => {
  let urlItems = "https://657636a50febac18d403c5b7.mockapi.io/items";

  return (
    <div>
      <div className="flex">
        <FilteredItems urlItems={urlItems} itemCategories={expCategories} />
      </div>
    </div>
  );
};

export default ExpensesPage;

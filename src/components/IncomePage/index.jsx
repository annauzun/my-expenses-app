import { incCategories } from "categories";
import FilteredItems from "components/FilteredItems";

const IncomePage = () => {
  let urlItems = "https://657636a50febac18d403c5b7.mockapi.io/incItems";

  return (
    <div>
      <div className="flex">
        <FilteredItems urlItems={urlItems} itemCategories={incCategories}/>
      </div>
    </div>
  );
};

export default IncomePage;

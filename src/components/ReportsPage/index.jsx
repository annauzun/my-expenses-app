import Report from "components/ReportsPage/Report"
import { incCategories, expCategories } from "categories";
import "./styles.css";


const ReportsPage = () => {
  /*let sumDif = sumInc - sumExp*/
  return (
    <div className="flex flex-col">
      <div className="flex my-10">
      <div className="bg-purple-100 w-1/2 h-full text-xl text-center py-4">
          Доходы
          <Report itemCategories={incCategories} url={"https://657636a50febac18d403c5b7.mockapi.io/incItems"} />
        </div>
        <div className="bg-green-100 w-1/2 h-full text-xl text-center py-4">
          Расходы
        <Report itemCategories={expCategories} url={"https://657636a50febac18d403c5b7.mockapi.io/items"}/>
        </div>
      {/*<div className="text-center text-2xl my-4">
            Баланс: {numberFormat.format(sumDif)} ₽
            </div>*/}
    </div>
    </div>
  );
};

export default ReportsPage;

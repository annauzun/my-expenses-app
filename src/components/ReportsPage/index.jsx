import ExpReport from "components/ReportsPage/ExpReport"
import IncReport from "components/ReportsPage/IncReport"
import "./styles.css";


const ReportsPage = () => {
  /*let sumDif = sumInc - sumExp*/
  return (
    <div className="flex flex-col">
      <div className="flex my-10">
      <div className="bg-purple-100 w-1/2 h-full text-xl text-center py-4">
          Доходы
        <IncReport />
        </div>
        <div className="bg-green-100 w-1/2 h-full text-xl text-center py-4">
          Расходы
        <ExpReport />
        </div>
      {/*<div className="text-center text-2xl my-4">
            Баланс: {numberFormat.format(sumDif)} ₽
            </div>*/}
    </div>
    </div>
  );
};

export default ReportsPage;

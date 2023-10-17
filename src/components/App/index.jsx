import Header from "components/Header";

import Chart from "components/Chart";
import Filter from "components/Filter";
import Expenses from "components/Expenses";

function App() {
  return (
    <div className="mx-auto max-w-screen-md max-h-screen justify-center">
      <Header />
      <div className="flex">
        <div className="w-1/2">
          <Chart />
        </div>
        <Filter />
      </div>
      <Expenses />
    </div>
  );
}

export default App;

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = [
  "#7571d2 ",
  "#5686e7 ",
  "#65c1d6 ",
  "#5ebb81 ",
  "#8ad542 ",
  "#ff7070   ",
  "#ffb525 ",
];
let numberFormat = new Intl.NumberFormat()
const Chart = ({ categoryItems }) => {
  return (
    <ResponsiveContainer width="100%" height="80%">
      <PieChart width={400} height={400}>
        <Pie
          data={categoryItems}
          cx="50%"
          cy="50%"
          labelLine={true}
          label={({ itemCategory, cost }) => `${itemCategory}: ${numberFormat.format(cost)} ₽`}
          outerRadius={75}
          fill="#8884d8"
          dataKey="cost"
        >
          {categoryItems.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Chart;

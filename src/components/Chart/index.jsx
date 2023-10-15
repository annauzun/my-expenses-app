import { PieChart, Pie, Cell } from 'recharts';


const Chart = () => {
    const data = [
        { name: 'Автомобиль', value: 1 },
        { name: 'Аренда', value: 2 },
        { name: 'Еда', value: 3 },
        { name: 'Обучение', value: 4 },
        { name: 'Одежда', value: 5 },
        { name: 'Путешествия', value: 6 },
        { name: 'Развлечения', value: 7 }
      ]
      const COLORS = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c', '#d0ed57', '#ffc658'];
    return (
        <div>
            
            <PieChart width={600} height={300} >
        <Pie
          data={data}
          cx={120}
          cy={150}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
       
      </PieChart>

        </div>
    )
}

export default Chart
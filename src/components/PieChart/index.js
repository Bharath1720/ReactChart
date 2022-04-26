import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const data = [
  {
    count: 809680,
    language: 'Telugu',
  },
  {
    count: 4555697,
    language: 'Hindi',
  },
  {
    count: 12345657,
    language: 'English',
  },
]

const pieChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        cx="50%"
        cy="100%"
        data={data}
        startAngle={0}
        endAngle={180}
        innerRadius="30%"
        outerRadius="200%"
        dataKey="count"
      >
        <Cell name="Gopi" fill="#fecba6" />
        <Cell name="Shyam" fill="#b3d23f" />
        <Cell name="Boyapati" fill="#a44c9e" />
      </Pie>
      <Legend
        iconType="star"
        layout="horizontal"
        verticalAlign="bottom"
        align="center"
      />
    </PieChart>
  </ResponsiveContainer>
)

export default pieChart

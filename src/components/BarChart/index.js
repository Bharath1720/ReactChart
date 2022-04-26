import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    group_name: 'A',
    boys: 200,
    girls: 400,
  },
  {
    group_name: 'B',
    boys: 3000,
    girls: 500,
  },
  {
    group_name: 'C',
    boys: 1000,
    girls: 1500,
  },
  {
    group_name: 'D',
    boys: 700,
    girls: 1200,
  },
]

const barChart = () => (
  // const DataFormatter = number => {
  //     if (number > 1000) {
  //       return `${(number / 1000).toString()}k`
  //     }
  //     return number.toString()
  //   }

  <ResponsiveContainer width="100%" height={500}>
    <BarChart
      data={data}
      margin={{
        top: 5,
      }}
    >
      <XAxis
        dataKey="group_name"
        tick={{
          stroke: 'red',
          strokeWidth: 1,
        }}
      />
      <YAxis
        //   tickFormatter=DataFormatter
        tick={{
          stroke: 'blue',
          strokeWidth: 1,
        }}
      />
      <Legend
        wrapperStyle={{
          padding: 0,
        }}
      />
      <Bar dataKey="boys" name="Bb" fill="#1f77b4" barSize="20%" />
      <Bar dataKey="girls" name="Gg" fill="#fd7f0e" barSize="20%" />
    </BarChart>
  </ResponsiveContainer>
)

export default barChart

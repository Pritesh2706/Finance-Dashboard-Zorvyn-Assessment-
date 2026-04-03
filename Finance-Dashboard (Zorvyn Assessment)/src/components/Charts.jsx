
import { LineChart, Line, XAxis, YAxis, Tooltip, PieChart, Pie } from "recharts"
import { useApp } from "../context/AppContext"

export default function Charts() {
  const { transactions } = useApp()

  return (
    <div className="grid md:grid-cols-2 gap-6 mt-6">
      <LineChart width={400} height={250} data={transactions}>
        <Line type="monotone" dataKey="amount" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
      </LineChart>

      <PieChart width={300} height={250}>
        <Pie data={transactions} dataKey="amount" nameKey="category" />
        <Tooltip />
      </PieChart>
    </div>
  )
}

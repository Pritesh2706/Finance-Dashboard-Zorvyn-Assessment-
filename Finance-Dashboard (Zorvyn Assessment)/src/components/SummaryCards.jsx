
import { useApp } from "../context/AppContext"

export default function SummaryCards() {
  const { transactions } = useApp()

  const income = transactions.filter(t => t.type === "income").reduce((a,b)=>a+b.amount,0)
  const expense = transactions.filter(t => t.type === "expense").reduce((a,b)=>a+b.amount,0)
  const balance = income - expense

  return (
    <div className="grid md:grid-cols-3 gap-4">
      <Card title="Balance" value={balance} />
      <Card title="Income" value={income} color="text-green-500"/>
      <Card title="Expense" value={expense} color="text-red-500"/>
    </div>
  )
}

function Card({ title, value, color }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h3 className="text-gray-500">{title}</h3>
      <p className={`text-2xl font-bold ${color}`}>₹{value}</p>
    </div>
  )
}

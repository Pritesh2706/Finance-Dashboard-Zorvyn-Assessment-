
import { useState } from "react"
import { useApp } from "../context/AppContext"

export default function Transactions() {
  const { transactions } = useApp()
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("all")

  const filtered = transactions.filter(t =>
    t.category.toLowerCase().includes(search.toLowerCase()) &&
    (filter === "all" || t.type === filter)
  )

  return (
    <div className="mt-6">
      <div className="flex gap-4 mb-4">
        <input placeholder="Search" onChange={e=>setSearch(e.target.value)} className="border p-2 rounded"/>
        <select onChange={e=>setFilter(e.target.value)} className="border p-2 rounded">
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-gray-100">
            <th>Date</th><th>Category</th><th>Amount</th><th>Type</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(t=>(
            <tr key={t.id} className="text-center border-t">
              <td>{t.date}</td>
              <td>{t.category}</td>
              <td>₹{t.amount}</td>
              <td className={t.type==="income"?"text-green-500":"text-red-500"}>{t.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

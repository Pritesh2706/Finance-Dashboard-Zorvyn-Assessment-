
import { useApp } from "../context/AppContext"

export default function Insights() {
  const { transactions } = useApp()

  const totals = {}
  transactions.forEach(t=>{
    if(t.type==="expense"){
      totals[t.category] = (totals[t.category]||0)+t.amount
    }
  })

  const max = Object.keys(totals).reduce((a,b)=> totals[a]>totals[b]?a:b, Object.keys(totals)[0])

  return (
    <div className="bg-white p-4 rounded-xl shadow mt-6">
      <h3 className="font-bold">Insights</h3>
      <p>You spend most on: {max}</p>
    </div>
  )
}

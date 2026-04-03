
import { AppProvider, useApp } from "./context/AppContext"
import SummaryCards from "./components/SummaryCards"
import Charts from "./components/Charts"
import Transactions from "./components/Transactions"
import Insights from "./components/Insights"

function Dashboard() {
  const { role, setRole } = useApp()

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Finance Dashboard</h1>
        <select onChange={(e)=>setRole(e.target.value)} className="border p-2 rounded">
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <SummaryCards />
      <Charts />
      <Transactions />
      <Insights />

      {role==="admin" && (
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Add Transaction
        </button>
      )}
    </div>
  )
}

export default function App() {
  return (
    <AppProvider>
      <Dashboard />
    </AppProvider>
  )
}

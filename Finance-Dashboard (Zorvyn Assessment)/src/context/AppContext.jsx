
import { createContext, useContext, useState, useEffect } from "react"
import { initialData } from "../data/mockData"

const AppContext = createContext()

export function AppProvider({ children }) {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("data")
    return saved ? JSON.parse(saved) : initialData
  })
  const [role, setRole] = useState("viewer")

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(transactions))
  }, [transactions])

  return (
    <AppContext.Provider value={{ transactions, setTransactions, role, setRole }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)

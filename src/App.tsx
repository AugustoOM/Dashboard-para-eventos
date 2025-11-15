import { useState, useEffect } from 'react'
import './App.css'
import StatsCard from './components/StatsCard'
import PopularEvents from './components/PopularEvents'
import RevenueChart from './components/RevenueChart'
import { DashboardData, Event } from './types'

function App() {
  const [dashboardData, setDashboardData] = useState<DashboardData>({
    totalTickets: 0,
    totalRevenue: 0,
    popularEvents: []
  })

  useEffect(() => {
    // Simulación de datos que se actualizan
    const loadDashboardData = () => {
      // Valores objetivo: 323.254 entradas y $3.430.134 recaudado
      const TARGET_TICKETS = 323254
      const TARGET_REVENUE = 3430134

      // Datos mock con algunos eventos populares
      // Distribución proporcional para alcanzar los totales objetivo
      const mockEvents: Event[] = [
        {
          id: 1,
          name: 'Concierto de Rock',
          ticketsSold: 125000,
          revenue: 1200000,
          date: '2024-02-15'
        },
        {
          id: 2,
          name: 'Festival de Jazz',
          ticketsSold: 85000,
          revenue: 950000,
          date: '2024-02-20'
        },
        {
          id: 3,
          name: 'Stand Up Comedy',
          ticketsSold: 65000,
          revenue: 680000,
          date: '2024-02-18'
        },
        {
          id: 4,
          name: 'Teatro Clásico',
          ticketsSold: 30000,
          revenue: 350000,
          date: '2024-02-22'
        },
        {
          id: 5,
          name: 'Festival de Música Electrónica',
          ticketsSold: 18254,
          revenue: 250134,
          date: '2024-02-25'
        }
      ]

      // Usar los valores objetivo exactos
      const totalTickets = TARGET_TICKETS
      const totalRevenue = TARGET_REVENUE
      
      // Ordenar eventos por popularidad (tickets vendidos)
      const popularEvents = [...mockEvents].sort((a, b) => b.ticketsSold - a.ticketsSold)

      setDashboardData({
        totalTickets,
        totalRevenue,
        popularEvents: popularEvents.slice(0, 5) // Top 5
      })
    }

    loadDashboardData()

    // Simular actualizaciones en tiempo real cada 5 segundos
    const interval = setInterval(() => {
      loadDashboardData()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="app">
      <header className="app-header">
        <h1>Panel de administración</h1>
        <p className="subtitle">by Ticketeate</p>
      </header>

      <main className="dashboard-content">
        <div className="stats-grid">
          <StatsCard
            title="Total de Entradas Vendidas"
            value={dashboardData.totalTickets}
            icon="🎫"
            trend="+12%"
          />
          <StatsCard
            title="Dinero Recaudado"
            value={`$${dashboardData.totalRevenue}`}
            icon="💰"
            trend="+8%"
          />
        </div>

        <div className="dashboard-grid">
          <PopularEvents events={dashboardData.popularEvents} />
          <RevenueChart events={dashboardData.popularEvents} />
        </div>
      </main>
    </div>
  )
}

export default App

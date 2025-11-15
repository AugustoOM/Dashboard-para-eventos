import { Event } from '../types'
import './RevenueChart.css'

interface RevenueChartProps {
  events: Event[]
}

function RevenueChart({ events }: RevenueChartProps) {
  const maxRevenue = Math.max(...events.map(e => e.revenue), 1)
  const totalRevenue = events.reduce((sum, event) => sum + event.revenue, 0)

  return (
    <div className="revenue-chart">
      <div className="card-header">
        <h2>Distribución de Ingresos</h2>
        <span className="card-subtitle">Por evento</span>
      </div>
      <div className="chart-content">
        <div className="revenue-total">
          <span className="total-label">Total</span>
          <span className="total-value">${totalRevenue.toLocaleString('es-ES')}</span>
        </div>
        <div className="chart-bars">
          {events.map((event) => {
            const percentage = (event.revenue / maxRevenue) * 100
            const revenuePercentage = totalRevenue > 0 
              ? ((event.revenue / totalRevenue) * 100).toFixed(1)
              : '0'
            
            return (
              <div key={event.id} className="chart-bar-item">
                <div className="bar-header">
                  <span className="bar-event-name">{event.name}</span>
                  <span className="bar-percentage">{revenuePercentage}%</span>
                </div>
                <div className="bar-container">
                  <div 
                    className="bar-fill"
                    style={{ width: `${percentage}%` }}
                  >
                    <span className="bar-value">${event.revenue.toLocaleString('es-ES')}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default RevenueChart

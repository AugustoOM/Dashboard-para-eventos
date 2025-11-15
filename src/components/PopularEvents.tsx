import { Event } from '../types'
import './PopularEvents.css'

interface PopularEventsProps {
  events: Event[]
}

function PopularEvents({ events }: PopularEventsProps) {
  const maxTickets = Math.max(...events.map(e => e.ticketsSold), 1)

  return (
    <div className="popular-events">
      <div className="card-header">
        <h2>Eventos Más Populares</h2>
        <span className="card-subtitle">Top 5 por entradas vendidas</span>
      </div>
      <div className="events-list">
        {events.map((event, index) => {
          const percentage = (event.ticketsSold / maxTickets) * 100
          return (
            <div key={event.id} className="event-item">
              <div className="event-rank">#{index + 1}</div>
              <div className="event-info">
                <h3 className="event-name">{event.name}</h3>
                <div className="event-stats">
                  <span className="event-stat">
                    <span className="stat-label">Entradas:</span>
                    <span className="stat-value">{event.ticketsSold.toLocaleString('es-ES')}</span>
                  </span>
                  <span className="event-stat">
                    <span className="stat-label">Recaudado:</span>
                    <span className="stat-value">${event.revenue.toLocaleString('es-ES')}</span>
                  </span>
                </div>
                <div className="progress-bar-container">
                  <div 
                    className="progress-bar"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PopularEvents

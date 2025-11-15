import { useState, useEffect } from 'react'
import './StatsCard.css'

interface StatsCardProps {
  title: string
  value: string | number
  icon: string
  trend?: string
}

function StatsCard({ title, value, icon, trend }: StatsCardProps) {
  const [displayValue, setDisplayValue] = useState<number>(0)
  const isNumber = typeof value === 'string' && !value.startsWith('$')

  useEffect(() => {
    // Extraer el número del valor, ya sea number o string (con o sin $)
    let targetValue = 0
    
    if (typeof value === 'number') {
      targetValue = value
    } else if (typeof value === 'string') {
      // Extraer solo los dígitos del string (funciona con "$123" o "123")
      const numericString = value.replace(/[^0-9]/g, '')
      targetValue = parseInt(numericString, 10) || 0
    }

    if (targetValue > 0) {
      const duration = 1500
      const steps = 60
      const increment = targetValue / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= targetValue) {
          setDisplayValue(targetValue)
          clearInterval(timer)
        } else {
          setDisplayValue(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    } else {
      setDisplayValue(0)
    }
  }, [value])

  const formatValue = () => {
    if (typeof value === 'string' && value.startsWith('$')) {
      return value
    }
    // Formato español con puntos como separadores de miles
    return displayValue.toLocaleString('es-ES')
  }

  return (
    <div className="stats-card">
      <div className="stats-card-header">
        <div className="stats-icon">{icon}</div>
        {trend && (
          <span className="trend-badge positive">{trend}</span>
        )}
      </div>
      <div className="stats-card-content">
        <h3 className="stats-title">{title}</h3>
        <p className="stats-value">
          {typeof value === 'string' && value.startsWith('$') 
            ? `$${displayValue.toLocaleString('es-ES')}`
            : formatValue()}
        </p>
      </div>
      <div className="stats-card-footer">
        <div className="pulse-indicator"></div>
        <span className="live-text">En vivo</span>
      </div>
    </div>
  )
}

export default StatsCard

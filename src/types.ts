export interface Event {
  id: number
  name: string
  ticketsSold: number
  revenue: number
  date: string
}

export interface DashboardData {
  totalTickets: number
  totalRevenue: number
  popularEvents: Event[]
}

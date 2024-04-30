export interface TicketCardProps {
    price: number,
      carrier: string,
    segments: [{
        origin: string,
        destination: string,
        date: string,
        duration: number,
        stops: string[]
    }
        
    ]
}
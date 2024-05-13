import { v4 as uuidv4 } from 'uuid';
import TicketCard from "../components/TicketCard/TicketCard"
import { Flight } from "../store/flights.slice"


export function produceTickets(arr: Flight[]) {
return arr.map(ticket => (
                <TicketCard 
                key={uuidv4()}
                price={ticket.price}
                carrier={ticket.carrier}
                segments={ticket.segments} />
            ))           

}
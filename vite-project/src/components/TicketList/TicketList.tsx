import TicketCard from "../TicketCard/TicketCard";
import { TicketListProps } from "./TicketList.props";
import styles from './TicketList.module.css';
import { getSearchId } from "../../store/flights.slice";
import { useEffect, useMemo } from "react";
import { AppDispatcher, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';




export default function TicketList({tickets}: TicketListProps ) {
    const dispatch = useDispatch<AppDispatcher>();
    const filter = useSelector((s: RootState) => s.flights.filter)
   
    
    useEffect(() => {
        dispatch(getSearchId())
    }, [dispatch])

const sortedTickets = useMemo(() => {
  if (filter === "cheap") {
    return [...tickets].sort((a, b) => a.price - b.price);
  } else if (filter === "fast") {
    return [...tickets].sort((a, b) => {
      const durationA = a.segments.reduce((acc, segment) => acc + segment.duration, 0);
      const durationB = b.segments.reduce((acc, segment) => acc + segment.duration, 0);
      return durationA - durationB;
    });
  } else if (filter === "optimum") {
    
    return [...tickets].sort ((a, b) => {
        const stopsA = a.segments.reduce((acc, segment)=> acc + segment.stops.length, 0);
        const stopsB = b.segments.reduce((acc, segment) => acc + segment.stops.length, 0);
        return stopsA - stopsB
    } )
  } else {
    return tickets;
  }
}, [tickets, filter]);


    return(
        <ul className={styles['list']}>
            {tickets.length > 0 && sortedTickets.map(ticket => (
                <TicketCard 
                key={uuidv4()}
                price={ticket.price}
                carrier={ticket.carrier}
                segments={ticket.segments} />
            ))}
           
            </ul>
        
    )
}

import styles from './TicketList.module.css';
import { getSearchId } from "../../store/flights.slice";
import { useEffect, useMemo } from "react";
import { AppDispatcher, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";

import { produceTickets } from "../../utils/produceTickets";




export default function TicketList( ) {
    const dispatch = useDispatch<AppDispatcher>();
    const filter = useSelector((s: RootState) => s.filters.filter);
    const selected = useSelector((s: RootState) => s.transfers.selected)
    const filteredTickets = useSelector((s: RootState) => s.flights.filteredTickets);
    const flightsPerPage = useSelector((state: RootState) => state.flights.flightsPerPage)
   
    
    useEffect(() => {
        dispatch(getSearchId())
    }, [dispatch])

const sortedTickets = useMemo(() => {
  if (filter === "cheap") {
    return [...filteredTickets].sort((a, b) => a.price - b.price);
  } else if (filter === "fast") {
    return [...filteredTickets].sort((a, b) => {
      const durationA = a.segments.reduce((acc, segment) => acc + segment.duration, 0);
      const durationB = b.segments.reduce((acc, segment) => acc + segment.duration, 0);
      return durationA - durationB;
    });
  } else if (filter === "optimum") {
    
    return [...filteredTickets].sort ((a, b) => {
        const stopsA = a.segments.reduce((acc, segment)=> acc + segment.stops.length, 0);
        const stopsB = b.segments.reduce((acc, segment) => acc + segment.stops.length, 0);
        return stopsA - stopsB
    } )
  } else {
    return filteredTickets;
  }
}, [filteredTickets, filter]);


const transferredTickets = produceTickets(sortedTickets)
const visibleFlights = transferredTickets.slice(0, flightsPerPage)


    return(
        <ul className={styles['list']}>
        {selected.length === 0 ? <p>Рейсов, подходящих под заданные фильтры, не найдено</p> : visibleFlights}
          {selected.length < 4 && selected.length > 0 && visibleFlights} 
        </ul>
        
    )
}
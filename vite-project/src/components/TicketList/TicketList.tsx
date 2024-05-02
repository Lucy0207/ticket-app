import TicketCard from "../TicketCard/TicketCard";
import styles from './TicketList.module.css';
import { getSearchId } from "../../store/flights.slice";
import { useEffect } from "react";
import { AppDispatcher, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';


export default function TicketList() {
    const dispatch = useDispatch<AppDispatcher>()
    const tickets = useSelector((state: RootState) => state.flights.tickets)
    console.log(tickets)

    useEffect(() => {
        dispatch(getSearchId())
    }, [dispatch])

    return(
        <ul className={styles['list']}>
            {tickets.length > 0 && tickets.map(ticket => (
                <TicketCard 
                key={uuidv4()}
                price={ticket.price}
                carrier={ticket.carrier}
                segments={ticket.segments} />
            ))}
           
            </ul>
        
    )
}
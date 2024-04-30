import TicketCard from "../TicketCard/TicketCard";
import styles from './TicketList.module.css';
import { getSearchId } from "../../store/flights.slice";
import { useEffect } from "react";
import { AppDispatcher, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";

export default function TicketList() {
    const dispatch = useDispatch<AppDispatcher>()
    const tickets = useSelector((state: RootState) => state.flights.tickets)

    useEffect(() => {
        dispatch(getSearchId())
    }, [dispatch])

    return(
        <ul className={styles['list']}>
            {tickets.map(ticket => (
                <TicketCard 
                price={ticket.price}/>
            ))}
           
            </ul>
        
    )
}
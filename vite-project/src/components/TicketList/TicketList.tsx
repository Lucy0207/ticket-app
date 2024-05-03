import TicketCard from "../TicketCard/TicketCard";
import { TicketListProps } from "./TicketList.props";
import styles from './TicketList.module.css';
import { getSearchId } from "../../store/flights.slice";
import { useEffect } from "react";
import { AppDispatcher } from "../../store/store";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';


export default function TicketList({tickets}: TicketListProps ) {
    const dispatch = useDispatch<AppDispatcher>()
    


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
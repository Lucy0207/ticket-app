import TicketCard from "../TicketCard/TicketCard";
import styles from './TicketList.module.css'

export default function TicketList() {
    return(
        <div className={styles['list']}>
            <TicketCard />
            </div>
        
    )
}
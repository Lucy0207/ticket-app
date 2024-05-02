import Segments from '../Segments/Segments';
import styles from './TicketCard.module.css';
import { TicketCardProps } from './TicketCard.props';


export default function TicketCard(props: TicketCardProps) {
    return (
        <div className={styles["ticket-card"]}>
            <div className={styles["header"]}>
                <div className={styles["price"]}>{props.price}<span>Р</span></div>
                <div>{props.carrier}</div>
            </div>
            <Segments segments={props.segments}/>
        </div>    
         
    )
}
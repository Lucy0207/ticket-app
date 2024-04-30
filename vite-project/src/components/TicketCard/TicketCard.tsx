import styles from './TicketCard.module.css';
import { TicketCardProps } from './TicketCard.props';


export default function TicketCard(props: TicketCardProps) {
    return (
        <div className={styles["ticket-card"]}>
            <div className={styles["header"]}>
                <div className={styles["price"]}>{props.price}<span>Р</span></div>
                <div>Company Logo</div>
            </div>
          <div className={styles["flights"]}>
            <div>{props.segments}</div>
            <div>В пути</div>
            <div>пересадки</div>
            <div>время прибытия</div>
            <div>duration</div>
            <div>airports</div>
          </div>
        </div>
    )
}
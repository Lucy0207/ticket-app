import styles from './TicketCard.module.css';
export default function TicketCard() {
    return (
        <div className={styles["ticket-card"]}>
            <div className={styles["header"]}>
                <div className={styles["price"]}>13400 <span>Р</span></div>
                <div>Company Logo</div>
            </div>
          <div className={styles["flights"]}>
            <div>Route</div>
            <div>В пути</div>
            <div>пересадки</div>
            <div>время прибытия</div>
            <div>duration</div>
            <div>airports</div>
          </div>
        </div>
    )
}
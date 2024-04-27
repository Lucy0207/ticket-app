import Logo from "../Logo/Logo";
import Filters from "../Filters/Filters";
import TicketList from "../TicketList/TicketList";
import TransferPanel from "../TransferPanel/TransferPanel";
import styles from './App.module.css';



export default function App() {
    return (
        <div className={styles['page']}>
            <div className={styles["logo"]}>
                <Logo />
            </div>
            <div className={styles["wrapper"]}>
                 <div className={styles['transfer-panel']}>
                 <TransferPanel />
            </div>
           
            <div className={styles["content"]}>
                
            <Filters />
            <TicketList />
            </div>
            </div>
           
                </div>
    )
}
import { useDispatch } from "react-redux";
import Logo from "../Logo/Logo";
import Filters from "../Filters/Filters";
import TicketList from "../TicketList/TicketList";
import TransferPanel from "../TransferPanel/TransferPanel";
import styles from './App.module.css';
import Button from "../Button/Button";
import { AppDispatcher } from "../../store/store";
import { flightsAction } from "../../store/flights.slice";




export default function App() {

    const dispatch = useDispatch<AppDispatcher>()


    const showMoreTickets = () => {
     dispatch(flightsAction.showMoreTickets())
    }

    return (
        <div className={styles['page']}>
            <div >
                <Logo />
            </div>
            <div className={styles["wrapper"]}>
                 <div className={styles['transfer-panel']}>
                 <TransferPanel />
                </div>
           
            <div className={styles["content"]}>
                
            <Filters />
            <TicketList />
            <Button appearance="big" onClick={showMoreTickets}>показать еще 5 билетов!</Button>
            </div>
            </div>
           
                </div>
    )
}
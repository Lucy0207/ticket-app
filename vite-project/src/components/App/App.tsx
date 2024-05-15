import { useDispatch, useSelector } from 'react-redux';
import { flightsAction } from '../../store/flights.slice';
import { AppDispatcher, RootState } from '../../store/store';
import Button from '../Button/Button';
import Filters from '../Filters/Filters';
import Logo from '../Logo/Logo';
import TicketList from '../TicketList/TicketList';
import TransferPanel from '../TransferPanel/TransferPanel';
import Loader from '../UI/Loader/Loader';
import styles from './App.module.css';

export default function App() {
  const dispatch = useDispatch<AppDispatcher>();
  const status = useSelector((s: RootState) => s.flights.status);
  console.log(status);

  const showMoreTickets = () => {
    dispatch(flightsAction.showMoreTickets());
  };

  return (
    <div className={styles['page']}>
      <div>
        <Logo />
      </div>
      <div className={styles['wrapper']}>
        <div className={styles['transfer-panel']}>
          <TransferPanel />
        </div>

        <div className={styles['content']}>
          <Filters />
          {status === 'loading' && <Loader />}
          <TicketList />
          <Button appearance="big" onClick={showMoreTickets}>
            показать еще 5 билетов!
          </Button>
        </div>
      </div>
    </div>
  );
}

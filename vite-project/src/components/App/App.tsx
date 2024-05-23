import styles from './App.module.css';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { flightsAction } from '../../store/flights.slice';
import { AppDispatcher } from '../../store/store';
import Button from '../Button/Button';
import Filters from '../Filters/Filters';
import Logo from '../Logo/Logo';
import TicketList from '../TicketList/TicketList';
import TransferPanel from '../TransferPanel/TransferPanel';

export default function App() {
  const dispatch = useDispatch<AppDispatcher>();

  const showMoreTickets = useCallback(() => {
    dispatch(flightsAction.showMoreTickets());
  }, [dispatch]);

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

          <TicketList />
          <Button appearance="big" onClick={showMoreTickets}>
            показать еще 5 билетов!
          </Button>
        </div>
      </div>
    </div>
  );
}

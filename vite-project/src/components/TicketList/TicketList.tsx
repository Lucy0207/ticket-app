import styles from './TicketList.module.css';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchId } from '../../services/searchService';
import { AppDispatcher, RootState } from '../../store/store';
import { produceTickets } from '../../utils/produceTickets';
import ErrorIndicator from '../UI/Loader/ErrorIndicator/ErrorIndicator';
import { sortTickets } from '../../utils/sortTickets';
import Loader from '../UI/Loader/Loader';

export default function TicketList() {
  const dispatch = useDispatch<AppDispatcher>();

  const filter = useSelector((s: RootState) => s.filters.filter);
  const selected = useSelector((s: RootState) => s.transfers.selected);
  const filteredTickets = useSelector((s: RootState) => s.flights.filteredTickets);
  const status = useSelector((s: RootState) => s.flights.status);
  const flightsPerPage = useSelector((state: RootState) => state.flights.flightsPerPage);

  useEffect(() => {
    dispatch(getSearchId());
  }, [dispatch]);

  const sortedTickets = useMemo(() => sortTickets(filteredTickets, filter), [filteredTickets, filter]);

  const transferredTickets = useMemo(() => produceTickets(sortedTickets), [sortedTickets]);
  const visibleFlights = useMemo(
    () => transferredTickets.slice(0, flightsPerPage),
    [transferredTickets, flightsPerPage],
  );

  return (
    <>
      {status === 'error' && <ErrorIndicator />}
      {status === 'loading' && <Loader />}
      <div className={styles['list']}>
        {selected.length === 0 ? (
          <p className={styles['no-flights-text']}>Рейсов, подходящих под заданные фильтры, не найдено</p>
        ) : (
          visibleFlights
        )}
      </div>
    </>
  );
}

import styles from './Segments.module.css';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { SegmentsProps } from './Segments.props';

const Segments: React.FC<SegmentsProps> = ({ segments }) => {
  return (
    <div className={styles['flights']}>
      {segments &&
        segments.map((segment) => {
          const departure = moment(segment.date).utc();
          const departureTime = departure.format('HH:mm');
          const duration = segment.duration;
          const arrivalTime = departure.clone().add(duration, 'minutes').format('HH:mm');
          const durationShow = `${Math.floor(duration / 60)}ч ${duration % 60} минут`;

          let stop = 'пересадка';
          if (segment.stops.length > 1) {
            stop = 'пересадки';
          }

          return (
            <div key={uuidv4()} className={styles['grids']}>
              <div className={styles['grey']}>
                {segment.destination} - {segment.origin}
              </div>
              <div className={styles['grey']}>В пути</div>
              <div className={styles['grey']}>
                {segment.stops.length > 0 ? `${segment.stops.length} ${stop}` : 'Без пересадок'}
              </div>
              <div className={styles['time']}>
                <div>{departureTime}</div>
                <span>-</span>
                <div>{arrivalTime}</div>
              </div>
              <div className={styles['lowercase']}>{durationShow}</div>
              <div>{segment.stops.join(', ')}</div>
            </div>
          );
        })}
    </div>
  );
};
export default Segments;

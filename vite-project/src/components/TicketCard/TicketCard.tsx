import styles from './TicketCard.module.css';
import Segments from '../Segments/Segments';
import { TicketCardProps } from './TicketCard.props';

export default function TicketCard(props: TicketCardProps) {
  const price = props.price;
  const priceString = String(price).split('');
  priceString.splice(-3, 0, ' ');
  const finalPrice = priceString.join('');

  return (
    <div className={styles['ticket-card']}>
      <div className={styles['header']}>
        <div className={styles['price']}>
          {finalPrice}
          <span> Р</span>
        </div>
        <img
          src={props.carrier && `https://pics.avs.io/99/36/${props.carrier}.png`}
          alt={`логотип компании ${props.carrier}`}
          className={styles['company-logo']}
        />
      </div>
      <Segments segments={props.segments} />
    </div>
  );
}

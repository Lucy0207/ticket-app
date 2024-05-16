import styles from './Checkbox.module.css';
import { useDispatch } from 'react-redux';
import { flightsAction } from '../../store/flights.slice';
import { AppDispatcher } from '../../store/store';
import { CheckboxProps } from './Checkbox.props';

export function Checkbox({ name, value, checkSelect = false, updateValue = () => {}, children }: CheckboxProps) {
  const dispatch = useDispatch<AppDispatcher>();

  const handleChange = () => {
    updateValue(!checkSelect, name);
    if (!checkSelect) {
      dispatch(flightsAction.showTransferTickets(value));
    } else {
      dispatch(flightsAction.removeTransferTickets(value));
    }
  };

  return (
    <div className={styles['field']}>
      <input
        className={styles['check__input']}
        type="checkbox"
        name={name}
        id={`${name}-checkbox`}
        checked={checkSelect}
        onChange={handleChange}
      />
      <span className={styles['check__box']} onClick={handleChange}></span>

      <label htmlFor={`${name}-checkbox`} className={styles['check']}>
        {children}
      </label>
    </div>
  );
}

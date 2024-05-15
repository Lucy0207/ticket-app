import styles from './Button.module.css';
import cn from 'classnames';
import { ButtonProps } from './Button.props';

export default function Button({ children, className, appearance = 'small', ...props }: ButtonProps) {
  return (
    <button
      className={cn(styles['filter-button'], className, {
        [styles['small']]: appearance === 'small',
        [styles['big']]: appearance === 'big',
      })}
      {...props}
    >
      {children}
    </button>
  );
}

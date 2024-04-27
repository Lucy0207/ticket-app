import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";

export default function Button({children}: ButtonProps) {
    return(
        <button className={styles["filter-button"]}>{children}</button>
    )
}
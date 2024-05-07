
import styles from "./Checkbox.module.css"
import { CheckboxProps } from "./Checkbox.props"


export function Checkbox({name, checkSelect= false, updateValue = () => {}, children} : CheckboxProps) {

const handleChange = () => {
    updateValue(!checkSelect, name);
}

    return (
            <div className={styles["field"]}>
                
                <input className={styles["check__input"]} type='checkbox' name={name} id={`${name}-checkbox`} checked={checkSelect} onChange={handleChange}/>
                      <span className={styles["check__box"]} onClick={handleChange}></span>
                
            <label htmlFor={`${name}-checkbox`} className={styles["check"]}>{children}</label>
           </div>
    )

}
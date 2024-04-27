import styles from './TransferPanel.module.css'

export default function TransferPanel() {
return (
    <div className={styles["transfer-panel"]}>
        <p className={styles["heading"]}>Количество пересадок</p>
        <form className={styles["transfer"]}>
            <div className={styles["field"]}>
                   <label>
                <input type='checkbox' name='transfers' value='Все'/>
                Все
            </label>
            </div>
         <div className={styles["field"]}>
              <label>
                <input type='checkbox' name='transfers' value='Без пересадок'/>
                Без пересадок
            </label>
         </div>
           <div className={styles["field"]}>
                <label>
                <input type='checkbox' name='transfers' value='1 пересадка'/>
                1 пересадка
            </label>
           </div>
         <div className={styles["field"]}>  <label>
                <input type='checkbox' name='transfers' value='2 пересадки'/>
                2 пересадки
            </label></div>
           <div className={styles["field"]}>
               <label>
                <input type='checkbox' name='transfers' value='3 пересадки'/>
                3 пересадки
            </label>
           </div>
          
        </form>
        </div>
)
}